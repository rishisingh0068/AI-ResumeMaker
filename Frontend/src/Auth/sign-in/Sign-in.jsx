import { SignIn } from '@clerk/clerk-react';
import React from 'react'

function SignInPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <SignIn/>
        </div>
    )
}

export default SignInPage;
