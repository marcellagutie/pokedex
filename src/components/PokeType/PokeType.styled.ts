import styled from 'styled-components';

interface TypeCellProps {
    backgroundColor?: string
    detail?: boolean
}

export const TypeCell = styled.span<TypeCellProps>`
    background: ${props => props.backgroundColor || '#9DA0AA'};
    color: 'white';
    margin: ${props => props.detail ? '1% 0 0 1%' : '0 2% 0 0'};
    line-height:  '32px';
    border-radius: 3px;
    width: 100%;
    max-width:  '140px';
    text-align: center;
    font-weight: '600';
    text-transform: capitalize;
    @media (min-width: 1200px) {
        max-width: '130px';
    }
    @media (max-width: 1200px) {
        max-width: '135px';
    }
`