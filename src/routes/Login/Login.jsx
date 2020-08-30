import React, { useState, useContext } from 'react'
import axios from '../../services/axios'
import AuthContext from '../../contexts/AuthContext'
import Logo from '../../components/Logo'

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
        <div>
            <form onSubmit={onSubmit}>
                <fieldset
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Logo />

                    <label>
                        Email
                        <input type="text" value={email} onChange={onChangeEmail} />
                    </label>

                    <label>
                        Senha
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </label>

                    <button>ENTRAR</button>
                </fieldset>
            </form>
        </div>
    )
}
