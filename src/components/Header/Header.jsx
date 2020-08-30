import React from 'react'
import Button from '@material-ui/core/Button'
import Logo from '../Logo'

export default function Header() {
    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: 'white',
            }}
        >
            <Logo />

            <Button color="primary" size="small">
                Sair
            </Button>
        </header>
    )
}
