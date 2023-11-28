import React from 'react'
import { SignOutButton, SignUp, UserProfile, currentUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const ProfilePage = async () => {
    const user = await currentUser()

    if (!user) {
        <SignUp />
    }
    return (
        <div className="w-full md:w-[80%] p-4 mx-auto flex flex-col items-center gap-3 relative">
            <Button variant='destructive' className={cn('cursor-pointer')} > <SignOutButton /></Button>
            <UserProfile additionalOAuthScopes={
                ['signOut']
            } />
        </div>
    )
}

export default ProfilePage