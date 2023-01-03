import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const FilterInput = styled.input`
    border: solid 3px ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.backgroundCard};
    line-height: 1.5;
    text-indent: 10px;
    height: auto;
    width: 100%;
    padding: 2px 0;
    font-size: 100%;
`

export const FilterButton = styled.button`
    height: 100%;
    width: 50px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.primary};
    margin-left: 8px;

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHover};
    }
`