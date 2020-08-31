import React, { useState, useCallback } from 'react'
import User from './User'
import Modal from 'react-modal'
import styled from 'styled-components'
import Details from './Details'

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

export default function Home({ users, getUsers }) {
    const [selected, setSelected] = useState(null)

    const onSelected = (user) => {
        setSelected(user)
    }

    const onClose = useCallback(() => {
        setSelected(null)
    }, [])

    return (
        <Row>
            {users.map((user) => (
                <User key={user.id} user={user} onSelected={onSelected} getUsers={getUsers} />
            ))}

            <Modal
                isOpen={selected != null}
                appElement={document.getElementById('root')}
                onRequestClose={onClose}
                style={customStyles}
            >
                {selected != null && <Details user={selected} getUsers={getUsers} />}
            </Modal>
        </Row>
    )
}
