import React from 'react'
import logo from '../../assets/images/logo-white.png'

export default function () {
    return (
        <picture>
            <img src={logo} alt="Logo" style={{ filter: 'invert(1)' }} />
        </picture>
    )
}
