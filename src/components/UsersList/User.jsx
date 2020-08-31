import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useState } from 'react'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
import styled, { css } from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    margin: 10px;
`

const Text = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;

    ${(props) =>
        props.strong &&
        css`
            font-weight: 600;
            line-height: 18px;
        `};
`

// FIXME: image
export default function User({ user, getUsers, onSelected }) {
    const [loading, setLoading] = useState(false)

    const onClick = () => {
        onSelected(user)
    }

    return (
        <Card>
            {loading && <LinearProgress />}

            <img
                src={user.url}
                onClick={onClick}
                alt="Imagem do usuário"
                style={{ width: 200, height: 200, objectFit: 'contain', objectPosition: 'left' }}
            />

            <Text strong>{user.name}</Text>

            <Text>{user.job_role}</Text>

            <span>
                <DeleteUser id={user.id} setLoading={setLoading} getUsers={getUsers} />

                <EditUser id={user.id} user={user} setLoading={setLoading} getUsers={getUsers} />
            </span>
        </Card>
    )
}
