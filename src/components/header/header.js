import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <h1>Lambda Bear Den Presents Looney Tunes!</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Log-In</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
        </>
    )
}
