import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
`
export const SelectWrapper = styled.div`
display: flex;
flex-direction: row;
`
export const DescriptionText = styled.span`
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 1em;
    color: ${({theme}) => theme.colors.text};
    `
export const LabelSelect = styled.label`
    margin-bottom: .2em;
    font-size: 1.3em;
    color: ${({theme}) => theme.colors.text};
`
export const Select = styled.select`
    text-transform: capitalize;
    margin: 0px 0px 5px 10px;
    background-color: #616161;
    color: white;
    font-size: 1.2em;
    max-width: 150px;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #616161;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #313131;
        border-radius: 20px;
    }
`