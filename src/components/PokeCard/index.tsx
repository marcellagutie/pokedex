import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Type from '../PokeType';
import { Info } from '../../utils/types/info.type';

import {
    CardWrapper,
    FavoriteWrapper,
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

    const [favorites, setFavorites] = useState([]);

    const addFavorite = (id: never) => {
        setFavorites([id, ...favorites]);
      };

    const removeFavorite = (id: never) => {
        const newFavolrites = favorites.filter(item => item !== id);
        setFavorites([...newFavolrites]);
    };

    const isFavorite = (id: number) => favorites.filter(item => item === id).length === 1 ? false : true;

    return (
        <CardWrapper>
            <Link to={props.info.name.toString()} key={id.toString()}>
                <img src={imgUrl} alt="" width={'168px'} height={'168px'}/>
            </Link>
            <Describe>
                <IdNumber>{id}</IdNumber>
                <FavoriteWrapper>
                    <Title>{props.info.name}</Title>
                    {
                        isFavorite(props.info.id) ?
                        <FaHeart color={'#CF0E0E'} fontSize={20}
                            onClick={() => removeFavorite(props.info.id as never) }
                            aria-label="remove to favorites"
                         /> :
                         <FaRegHeart color={'#CF0E0E'} fontSize={20}
                            onClick={() => addFavorite(props.info.id as never)}
                            aria-label="add to favorites"
                        />
                    }
                </FavoriteWrapper>
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
