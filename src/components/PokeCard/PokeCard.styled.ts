import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.backgroundCard};
    color: white;
    margin-top: .5em;
    @media (min-width: 1200px) {
        width: 168px;
    }
    @media (max-width: 1200px) {
        width: 216px;
    }
    @media (max-width: 1000px) {
        width: 280px;
    }
    @media (max-width: 700px) {
        width: 301px;
    }
`

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.background};
    padding: .5em;
`

export const Title = styled.span`
    font-size: 1.45em;
    margin-bottom: 5px;
    line-height: 125%;
    text-transform: capitalize;
    font-weight: 600;
    color: ${({theme}) => theme.colors.text};
`

export const Types = styled.div`
    display: flex;
    flex-direction: row;
`

export const IdNumber = styled.p`
    font-weight: 600;
    padding-top: 2px;
    color: ${({theme}) => theme.colors.subtext};
    font-size: 80%;
    line-height: 125%;
    margin: .5em 0;
`