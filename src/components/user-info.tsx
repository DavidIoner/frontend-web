import React from 'react'


interface UserInfoProps {
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
    } | undefined
}

export default function UserInfo({user}: UserInfoProps) {
    return(
        <div>
           Hello {user?.name}
        </div>
    )
}