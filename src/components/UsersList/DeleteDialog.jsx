import PropTypes from 'prop-types'
import React from 'react'
import Modal from 'react-modal'
import styled, { css } from 'styled-components'
import Button from '../Button'
import Flex from '../Flex'

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
    },
}

const Text = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
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
    line-height: 48px;
    display: flex;
    align-items: center;
    color: #000000;
`

const Right = styled.div`
    align-self: flex-end;
`

export default function DeleteDialog({ onClose, open, onDelete }) {
    return (
        <Modal
            isOpen={open}
            appElement={document.getElementById('root')}
            onRequestClose={onClose}
            style={customStyles}
        >
            <Flex column>
                <Title>Excluir Naver</Title>

                <Text>Tem certeza que deseja excluir este Naver?</Text>

                <Right>
                    <Button border padding="0.4em 5em" onClick={onClose}>
                        Cancelar
                    </Button>

                    <Button primary padding="0.4em 5em" onClick={onDelete}>
                        Excluir
                    </Button>
                </Right>
            </Flex>
        </Modal>
    )
}

DeleteDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
}
