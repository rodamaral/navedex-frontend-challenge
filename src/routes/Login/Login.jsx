import React, { useState, useContext } from 'react'
import axios from '../../services/axios'
import AuthContext from '../../contexts/AuthContext'
import Logo from '../../components/Logo'
import styled from 'styled-components'
import Button from '../../components/Button'

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

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    color: #212121;

    input {
        border: 1px solid black;
        background: transparent;
        font-size: 16px;
        line-height: 24px;
        color: #333;
    }

    input::placeholder {
        font-size: 16px;
        line-height: 24px;
        color: #9e9e9e;
    }
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
                setToken(res.data.token)
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

                    <Label>
                        E-mail
                        <input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Label>

                    <Label>
                        Senha
                        <input
                            placeholder="Senha"
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </Label>

                    <Button primary>ENTRAR</Button>
                </FieldSet>
            </form>
        </Container>
    )
}
