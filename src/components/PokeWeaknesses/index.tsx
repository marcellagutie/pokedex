import Type from '../PokeType';

import { Wrapper } from './PokeWeaknesses.styled';

interface WeaknessesProps {
    info: string[];
}

const PokeWeaknesses = (props: WeaknessesProps) => {
    return (
        <Wrapper>
            {props.info.map((type: string) => {
                return <Type key={`${type}Weak`} type={type} weak/>
            })}
        </Wrapper>
    )
}

export default PokeWeaknesses;