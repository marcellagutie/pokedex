import styled from 'styled-components';

interface TypeCellProps {
    backgroundColor?: string
    weak?: boolean
}

export const TypeCell = styled.span<TypeCellProps>`
    background: ${props => props.backgroundColor || '#9DA0AA'};
    color: 'white';
    margin: ${props => props.weak ? '5px 10px' : '0px 10px' };
    line-height:  '32px';
    border-radius: 3px;
    width: 39%;
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