import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import PokeType from '../../components/PokeType';
import Loading from '../../components/Loading';
import Stats from '../../components/PokeStats';
import Description from '../../components/PokeDescription';
import PokeInfo from '../../components/PokeInfo';
import Weaknesses from '../../components/PokeWeaknesses';

import api from '../../services/api';
import { Type } from '../../utils/types/info.type'

import {
    Wrapper,
    Types,
    ColumnWrapper,
    RowWrapper,
    SubTitle,
    BackButton,
    Title
} from './Detail.styled';

const Detail = () => {
    const { pokemonName } = useParams();
    const { pokeFilter } = api();
    const { data: pokemon, isLoading } = useQuery(pokemonName as string, () => pokeFilter(pokemonName as string));
    const id = `#${String(pokemon?.info.id).padStart(3)}`;
    const sprite = pokemon?.info.img.other['official-artwork'].front_default;
    const pokemonRender = () => {
        if(isLoading) {
            return <Loading />;
        } else {
            return (
                <Wrapper>
                    <Title>{`${pokemon?.info.name} ${id}`}</Title>
                    <RowWrapper>
                        <ColumnWrapper>
                            <img src={sprite} alt={`${pokemon?.info.name}`} />
                            <Types>
                                <SubTitle>Tipo</SubTitle>
                                {pokemon?.info.types.map((type: Type) => {
                                    return <PokeType key={type.type.name} type={type.type.name}/>
                                })}
                            </Types>
                            <Types>
                                <SubTitle>Pontos fracos</SubTitle>
                                <Weaknesses info={pokemon?.info.weaknesses}/>
                            </Types>
                        </ColumnWrapper>
                        <ColumnWrapper>
                            <Description info={pokemon?.description} />
                            <PokeInfo
                                height={pokemon?.info.height}
                                weight={pokemon?.info.weight}
                                abilities={pokemon?.info.abilities}
                            />
                            <Stats stats={pokemon?.info.stats}>
                                <SubTitle>Estatisticas</SubTitle>
                            </Stats>
                        </ColumnWrapper>
                    </RowWrapper>
                    <Link to="/">
                        <BackButton>Voltar para listagem</BackButton>
                    </Link>
                </Wrapper>
            );
        }
    }
    return pokemonRender();
}

export default Detail;