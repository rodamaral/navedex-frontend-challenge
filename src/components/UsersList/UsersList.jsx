import React, { useCallback } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import Details from './Details'
import User from './User'

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
        maxHeight: '80%',
        padding: '0 0',
    },
}

export default function UserList({ user, setUser, users, getUsers }) {
    const onSelected = (user) => {
        setUser(user)
    }

    const onClose = useCallback(() => {
        setUser(null)
    }, [setUser])

    return (
        <Row>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    onSelected={onSelected}
                    getUsers={getUsers}
                    setUser={setUser}
                />
            ))}

            <Modal
                isOpen={user != null}
                appElement={document.getElementById('root')}
                onRequestClose={onClose}
                style={customStyles}
            >
                {user != null && <Details user={user} setUser={setUser} getUsers={getUsers} />}
            </Modal>
        </Row>
    )
}
