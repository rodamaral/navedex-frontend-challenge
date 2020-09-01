import styled from 'styled-components'

const EqualDivider = styled.div`
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    background: papayawhip;
    ${(props) => props.vertical && 'flex-direction: column;'}

    > * {
        flex: 1;

        &:not(:first-child) {
            ${(props) => (props.vertical ? 'margin-top' : 'margin-left')}: 1rem;
        }
    }
`
export default EqualDivider
