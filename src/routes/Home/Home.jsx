import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import UsersList from '../../components/UsersList'
import AuthContext from '../../contexts/AuthContext'
import axios from '../../services/axios'

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background: white;
    width: 100%;
    margin: 20px;
`

export default function Home({ user, setUser }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)
    const history = useHistory()

    const getUsers = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get('navers', {
                headers: { Authorization: `Bearer ${token}` },
            })
            setUsers(res.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const onClick = () => {
        history.push('/insert')
    }

    return (
        <>
            <Section>
                <h4>Navers</h4>

                <Button onClick={onClick} primary>
                    Adicionar Naver
                </Button>
            </Section>

            <div>
                {loading ? (
                    <div>loading</div>
                ) : (
                    <UsersList user={user} setUser={setUser} users={users} getUsers={getUsers} />
                )}
            </div>
        </>
    )
}
