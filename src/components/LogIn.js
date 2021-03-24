import React from 'react'

export default function LogIn() {
    return (
        <form>
            <p>Please Log-In to continue</p>
            <input id='username' type='text' name='username' placeholder='Username' />
            <input id='password' type='password' name='password' placeholder='Password' />
            <button type='submit'>Log-In</button>
        </form>
    )
}
