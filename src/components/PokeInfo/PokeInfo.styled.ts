import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${({theme}) => theme.colors.primary};;
    border-radius: 10px;
    padding: 1em;
    max-height: 250px;
`
export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
    width: 50%;
`
export const Label = styled.h2`
    font-weight: 700;
`
export const Value = styled.span`
    color: black;
    font-size: 20px;
`
