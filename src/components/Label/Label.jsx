import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
    margin: 10px 10px;
    box-sizing: content-box;

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

export default function Component({
    value,
    label,
    type = 'text',
    name,
    placeholder,
    className,
    style,
    onChange,
}) {
    return (
        <Label>
            {label}
            <input
                placeholder={typeof placeholder === 'string' ? placeholder : label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
                style={style}
            />
        </Label>
    )
}

Component.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}
