import React, { useState, useEffect, useContext, useCallback } from 'react'
import styled from 'styled-components'
import axios from '../../services/axios'
import Header from '../../components/Header'
import UsersList from '../../components/UsersList'
import AuthContext from '../../contexts/AuthContext'
import Button from '../../components/Button'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 1366px;
    margin: 0 auto;
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background: white;
    width: 100%;
    margin: 20px;
`

export default function Home() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)

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

    return (
        <Page>
            <Header />

            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Section>
                    <h4>Navers</h4>

                    <Button primary>Adicionar Naver</Button>
                </Section>

                <div>
                    {loading ? <div>loading</div> : <UsersList users={users} getUsers={getUsers} />}
                </div>
            </section>
        </Page>
    )
}
