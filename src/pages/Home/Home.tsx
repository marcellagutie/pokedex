import {useEffect, Fragment} from 'react';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import PokemonCard from '../../components/PokeCard';
import Filter from '../../components/Filter';
import Loading from '../../components/Loading';

import api from '../../services/api';
import useHandle from '../../hooks/useHandle';
import { PokemonList, InfinityScroll } from './Home.styled';

const Home = () => {
    const { infinityScroll } = api();
    const { filter, handleInputChange } = useHandle();
    const { ref, inView } = useInView();
    const {data, fetchNextPage } = useInfiniteQuery (
        'pokemons',
        ({pageParam = 0}) => infinityScroll(pageParam),
        { getNextPageParam: (page, all) => (page.length * all.length) }
    )

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    return (
        <div>
            <Filter handleInputChange={handleInputChange} value={filter}/>
            <PokemonList>
            {data?.pages.map((page: any) => (
                <Fragment key={`pokemon${page[0].id}`}>
                {page.map((pokemon: any) => {
                    return (
                        <Link to={pokemon.name} key={pokemon.id.toString()}>
                            <PokemonCard info={pokemon}/>
                        </Link>
                    )
                })}
                </Fragment>
            ))}
            </PokemonList>
            <InfinityScroll ref={ref}>
                <Loading />
            </InfinityScroll>
        </div>
    );
}

export default Home;