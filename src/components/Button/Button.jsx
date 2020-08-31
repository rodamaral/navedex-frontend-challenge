import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid transparent;
    color: black;
    margin: 0 1em;
    padding: 0.25em 2em;
    cursor: pointer;

    ${(props) =>
        props.primary &&
        css`
            background: black;
            color: white;
            border: 2px solid black;
        `};
`
export default Button
