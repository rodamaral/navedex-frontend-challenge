import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import EditIcon from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import DeleteUser from './DeleteUser'

const Img = styled.img`
    max-width: max(400px, 60%);
    height: 100%;
    object-fit: contain;
    object-position: left;
`

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const Column = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 10px;
`

const Text = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin-bottom: ${(p) => `${p.marginBottom}px`};

    ${(p) =>
        p.strong &&
        css`
            font-weight: 600;
            line-height: 18px;
        `};
`

const Title = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    color: #000000;
`

export default function Details({ user, getUsers }) {
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const onEdit = () => {
        history.push('/update')
    }

    return (
        <Row>
            <Img src={user.url} alt="Imagem do usuário" />

            <Column>
                {loading && <LinearProgress />}

                <Title>{user.name}</Title>
                <Text marginBottom={10}>{user.job_role}</Text>

                <Text strong>Idade</Text>
                <Text marginBottom={10}>{user.birthdate}</Text>

                <Text strong>Tempo de empresa</Text>
                <Text marginBottom={10}>{user.admission_date}</Text>

                <Text strong>Projetos que participou</Text>
                <Text marginBottom={10}>{user.project}</Text>

                <span style={{ marginTop: 'auto' }}>
                    <DeleteUser id={user.id} setLoading={setLoading} getUsers={getUsers} />

                    <IconButton aria-label="edit" onClick={onEdit}>
                        <EditIcon />
                    </IconButton>
                </span>
            </Column>
        </Row>
    )
}

Details.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        job_role: PropTypes.string,
        admission_date: PropTypes.string,
        user_id: PropTypes.string,
        project: PropTypes.string,
        birthdate: PropTypes.string,
        url: PropTypes.string,
    }),
    getUsers: PropTypes.func.isRequired,
}
