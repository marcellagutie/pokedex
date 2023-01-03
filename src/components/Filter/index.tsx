import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import {
    Wrapper,
    FilterInput,
    FilterButton
} from './Filter.styled'
interface FilterProps {
    handleInputChange: (value: string) => void;
    value: string;
}

const Filter = (props: FilterProps) => {
    const theme = useTheme();
    return(
        <form>
            <Wrapper>
                <FilterInput
                    type="text"
                    id="FilterPokemonByName"
                    placeholder='Digite o nome ou o identificador'
                    value={props.value}
                    onChange={e => props.handleInputChange(e.target.value)}
                />
                <Link to={`/${props.value}`}>
                    <FilterButton>
                        <FaSearch color={theme.colors.backgroundCard} fontSize={25} />
                    </FilterButton>
                </Link>
            </Wrapper>
        </form>
    )
}

export default Filter;