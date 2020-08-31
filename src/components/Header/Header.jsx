import React, { useContext } from 'react'
import Button from '../Button'
import Logo from '../Logo'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

export default function Header() {
    const history = useHistory()
    const { setToken } = useContext(AuthContext)

    const onClick = () => {
        setToken(null)
        history.push('/login')
    }

    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: 'white',
            }}
        >
            <Logo />

            <Button onClick={onClick}>Sair</Button>
        </header>
    )
}
