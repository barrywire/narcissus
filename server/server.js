// Initiate the app
const express = require('express');
const app = express()

// Set up middleware
app.use(express.json())

// Import the other packages
const cron = require('node-cron')
const nodemailer = require('nodemailer')
const admin = require('firebase-admin')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')
const credentials = require('./narcissus-rjw-adminsdk.json')

admin.initializeApp({
    credential: admin.credential.cert(credentials),
    databaseURL: 'https://narcissus-rjw-default-rtdb.firebaseio.com'
})

const db = getFirestore();
let entries
let timestamp

app.post('/signup', async (req, res) =>
{
    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false,
    })
    res.json(userResponse)
})

app.get('/users', async (req, res) =>
{
    const users = await admin.auth().listUsers()
    res.json(users)
})

app.get('/entries', async (req, res) =>
{
    const entries = await db.collection('entries').get()
    res.json(entries.docs.map(doc => doc.data()))
    return {
        entries: entries.docs.map(doc => doc.data()),
        timestamp: entries.docs.data().timestamp
    }
})

// Set up the port and listener for the requests
const PORT = process.env.PORT || 8080

app.listen(PORT, () =>
{
    console.log('Server is running on port ' + PORT)
})

// create transporter
var transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'barry.wire@outlook.com',
        pass: '418006Indexed.'
    }
})

var mailOptions = {
    from: 'barry.wire@outlook.com',
    to: 'barnabas.wire@gmail.com',
    subject: 'Narcissus: The Random Journal Website',
    html: `<h1>Journal Entry for:</h1> + ${ timestamp }`
};


// // create a cron scheduler to run every minute
cron.schedule('* * * * *', () =>
{
    transporter.sendMail(mailOptions, function (err, info)
    {
        if (err)
            console.log('Error ', err);
        else
            console.log('Info ', info.response);
    })
    console.log('Running every minute');
})
