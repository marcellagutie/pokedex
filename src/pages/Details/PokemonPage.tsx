import { useQuery } from "react-query"
import React from 'react'
import { Link, useParams } from "react-router-dom"

import Type from "../../components/Type"
import Loading from "../../components/Loading"
import Stats from "../../components/PokeStats"
import Description from "../../components/PokeDescription"
import Info from "../../components/PokeInfo"
import Weaknesses from "../../components/Weaknesses"

import useApi from "../../services/api"
import {
    PokemonWrapper,
    TypesDiv,
    ColumnWrapper,
    RowWrapper,
    SubTitle,
    BackButton,
    Title
} from './PokemonPage.styled'

const PokemonPage: React.FC = () => {
    const { pokemonName } = useParams()
    const { searchPokemon } = useApi()
    const { data: pokemon, isLoading } = useQuery(pokemonName as string, () => searchPokemon(pokemonName as string))
    const id = `#${String(pokemon?.info.id).padStart(3)}`
    const sprite = pokemon?.info.img.other['official-artwork'].front_default
    function pokemonRender() {
        if(isLoading) {
            return <Loading />
        } else {
            return (
                <PokemonWrapper>
                    <Title>{`${pokemon?.info.name} ${id}`}</Title>
                    <RowWrapper>
                        <ColumnWrapper>
                            <img src={sprite} alt={`image of ${pokemon?.info.name}`} />
                            <TypesDiv>
                                <SubTitle>Tipo</SubTitle>
                                {pokemon?.info.types.map((type: any) => {
                                    return <Type key={type.type.name} type={type.type.name}/>
                                })}
                            </TypesDiv>
                            <TypesDiv>
                                <SubTitle>Fraquezas</SubTitle>
                                <Weaknesses info={pokemon?.info.weaknesses}/>
                            </TypesDiv>
                        </ColumnWrapper>
                        <ColumnWrapper>
                            <Description info={pokemon?.description} />
                            <Info
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
                </PokemonWrapper>
            )
        }
    }
    return pokemonRender()
}

export default PokemonPage