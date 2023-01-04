import Type from '../PokeType';
import { Info } from '../../utils/types/info.type';

import {
    CardWrapper,
    Describe,
    IdNumber,
    Title,
    Types,
} from './PokeCard.styled';

interface PokemonCardProps {
    info: Info;
}

export default function PokeCard(props: PokemonCardProps) {
    const imgUrl = props.info.sprites.other['official-artwork'].front_default;
    const id = `#${String(props.info.id).padStart(3)}`;

    return (
        <CardWrapper>
            <img src={imgUrl} alt="" />
            <Describe>
                <IdNumber>{id}</IdNumber>
                <Title>{props.info.name}</Title>
                <Types>
                    {
                        props.info.types.map((type: any) => {
                            return (
                                <Type key={type.type.name} type={type.type.name}/>
                            )
                        })
                    }
                </Types>
            </Describe>
        </CardWrapper>
    )
}
