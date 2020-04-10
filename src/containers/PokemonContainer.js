import React, { Component } from 'react'
import { userQuery, useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/getPokemons';
import { Pokemon } from '../components/Pokemon'

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 12 },
    })

    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}

export default PokemonContainer
