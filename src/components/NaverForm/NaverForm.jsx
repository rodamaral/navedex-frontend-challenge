import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Label from '../../components/Label'

const FlexColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: stretch;
    padding: 10px;
`

const Dual = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: stretch;
`

export default function NaverForm({ user, disabled, setUser, onSave }) {
    const onChange = (event) => {
        const { name, value } = event.target
        setUser((user) => ({ ...user, [name]: value }))
    }

    return (
        <form>
            <fieldset disabled={disabled}>
                <FlexColumn>
                    <Dual>
                        <Label label="Nome" value={user.name} name="name" onChange={onChange} />

                        <Label
                            label="Cargo"
                            value={user.job_role}
                            name="job_role"
                            onChange={onChange}
                        />
                    </Dual>

                    <Dual>
                        <Label
                            label="Idade"
                            type="text"
                            value={user.birthdate}
                            name="birthdate"
                            onChange={onChange}
                        />

                        <Label
                            label="Tempo de empresa"
                            value={user.admission_date}
                            name="admission_date"
                            onChange={onChange}
                        />
                    </Dual>

                    <Dual>
                        <Label
                            label="Projetos que participou"
                            value={user.project}
                            name="project"
                            onChange={onChange}
                        />

                        <Label
                            label="URL da foto do Naver"
                            type="url"
                            value={user.url}
                            name="url"
                            onChange={onChange}
                        />
                    </Dual>
                </FlexColumn>

                <div style={{ float: 'right', marginRight: 10 }}>
                    <Button onClick={onSave} primary>
                        Salvar
                    </Button>
                </div>
            </fieldset>
        </form>
    )
}

NaverForm.propTypes = {
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
    disabled: PropTypes.bool,
    setUser: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
}
