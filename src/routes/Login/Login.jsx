import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Label from '../../components/Label'
import Logo from '../../components/Logo'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px;
`

const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    width: 448px;
    height: 408px;
    margin: 0 auto;
    border: 1px solid #212121;
    box-sizing: border-box;
`

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setToken } = useContext(AuthContext)

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        axios
            .post('users/login', {
                password,
                email,
            })
            .then((res) => {
                const { token } = res.data
                setToken(token)
                localStorage.setItem('token', token)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <FieldSet>
                    <div style={{ margin: '0 auto' }}>
                        <Logo />
                    </div>

                    <Label
                        value={email}
                        label="E-mail"
                        placeholder="E-mail"
                        onChange={onChangeEmail}
                    />

                    <Label
                        value={password}
                        label="Senha"
                        placeholder="Senha"
                        type="password"
                        onChange={onChangePassword}
                    />

                    <Button primary>ENTRAR</Button>
                </FieldSet>
            </form>
        </Container>
    )
}
