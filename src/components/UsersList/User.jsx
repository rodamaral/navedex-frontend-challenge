import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useState } from 'react'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'

// FIXME: image
export default function User({ user, getUsers }) {
    const [loading, setLoading] = useState(false)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                border: '1px solid blue',
            }}
        >
            <div style={{ minWidth: '100%' }}>{loading && <LinearProgress />}</div>

            <img style={{ maxWidth: 200 }} src={user.url} alt="Imagem do usuário" />

            <strong>{user.name}</strong>

            <span>{user.job_role}</span>

            <span>
                <DeleteUser id={user.id} setLoading={setLoading} getUsers={getUsers} />

                <EditUser id={user.id} user={user} setLoading={setLoading} getUsers={getUsers} />
            </span>
        </div>
    )
}
