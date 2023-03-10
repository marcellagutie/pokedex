import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5vw;
`

export const Types = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1em;
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;
    img {
        background-color: ${({theme}) => theme.colors.backgroundCard};
        padding-bottom: 30px;
        transition: linear .2s;
    }
    @media (min-width: 500px) {
        &:nth-child(1) {
            margin-right: 1em;
        }
    }
`

export const RowWrapper = styled.div`
    display: flex;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 1.4em;
    width: 100%;
    margin-bottom: .5em;
    color: ${({theme}) => theme.colors.text};
    transition: linear .2s;
`

export const BackButton = styled.button`
    background-color: ${({theme}) => theme.colors.primaryHover};
    border-radius: 5px;
    color: black;
    padding: .8em 1.5em;
    font-weight: 600;
    font-size: 1em;
    margin: 1em;
    transition: linear .2s;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHover};
    }
`

export const Select = styled.select`
    text-transform: capitalize;
    margin-bottom: .5em;
    background-color: ${({theme}) => theme.colors.gray};
    color: white;
    font-size: 1.2em;
    max-width: 150px;
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    line-height: 125%;
    font-size: 2.3em;
    text-transform: capitalize;
    margin-bottom: 5px;
    margin-right: .5em;
    transition: linear .2s;
`