import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const SearchInput = styled.input`
    border: solid 3px #616161;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.backgroundCard};
    line-height: 1.5;
    text-indent: .5em;
    height: auto;
    width: 100%;
    padding: .5em 0;
    font-size: 100%;

    &:focus{
        box-shadow:
            inset 0 0 0 1px ${({theme}) => theme.colors.backgroundCard},
            inset 0 0 0 2px black;
    }
`

export const SearchButton = styled.button`
    height: 100%;
    width: 50px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.primary};
    margin-left: .5em;

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHover};
    }
`