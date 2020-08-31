import React from 'react'
import User from './User'

export default function Home({ users, getUsers }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {users.map((user) => (
                <User key={user.id} user={user} getUsers={getUsers} />
            ))}
        </div>
    )
}
