import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    /* border-radius: 3px; */
    border: 2px solid transparent;
    color: #212121;
    margin: 0 1em;
    padding: ${(p) => (p.padding ? p.padding : '0.25em 2em')};
    cursor: pointer;
    font-weight: 600;

    &:disabled {
        opacity: 0.4;
        filter: alpha(opacity=40);
    }

    ${(p) =>
        p.primary &&
        css`
            background: #212121;
            color: white;
            border: 2px solid #212121;
        `};

    ${(p) =>
        p.border &&
        css`
            border: 1px solid #212121;
        `};
`
export default Button
