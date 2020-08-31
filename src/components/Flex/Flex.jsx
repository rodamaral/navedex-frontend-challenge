import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: ${(p) => (p.column ? 'column' : 'row')};
    justify-content: ${(p) => p.justifyContent || 'space-between'};
    align-items: ${(p) => p.alignItems || 'baseline'};
    background: ${(p) => p.background || 'transparent'};
    width: ${(p) => p.width || '100%'};
    margin: ${(p) => p.margin || '20px'};
`
export default Flex
