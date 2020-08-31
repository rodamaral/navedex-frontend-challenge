import React from 'react'
import logo from '../../assets/images/logo-white.png'
import styled from 'styled-components'

const Img = styled.img`
    filter: invert(1);
`

export default function ({ className, style }) {
    return (
        <picture className={className} style={style}>
            <Img src={logo} alt="Logo" />
        </picture>
    )
}
