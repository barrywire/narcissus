// React imports
import React from 'react'

// Package imports
import { Helmet } from 'react-helmet'


export default function Meta({ title })
{
    return (
        <Helmet>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <meta name='description' content={'Narcissus - Random Journal Website'} />
            <title>{title}</title>
        </Helmet>
    )
}
