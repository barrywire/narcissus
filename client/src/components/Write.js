// React imports
import React from 'react'


export default function Write()
{
    return (
        <>
            <div className='container py-3'>
                <h5>
                    Shall we write?
                </h5>

                {/* form with a single text field that accepts a maximum of 500 characters */}
                <form className='row gy-2 gx-3 align-items-center'>
                    <div className='form-group'>
                        <textarea className='form-control' rows='2' maxLength='500'></textarea>
                    </div>

                    <small className='form-text text-muted'>
                        You can write up to 500 characters.
                    </small>

                    <div className='form-group'>
                        <button className='btn btn-outline-danger'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
