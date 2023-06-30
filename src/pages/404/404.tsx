import { paths } from 'core'
import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='error-404'>
            <h1>404</h1>
            <p>Page is not found</p>
            <Link to={paths.main}>Back to main</Link>
        </div>
    )
}

export default Error404