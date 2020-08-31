import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext from '../../contexts/AuthContext'
import Button from '../Button'
import Logo from '../Logo'

const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    background: white;
`

export default function Header() {
    const history = useHistory()
    const { setToken } = useContext(AuthContext)

    const onClick = () => {
        setToken(null)
        history.push('/login')
    }

    return (
        <HeaderBase>
            <Logo />

            <Button onClick={onClick}>Sair</Button>
        </HeaderBase>
    )
}
