import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonContainer from './containers/PokemonContainer';
import './App.css';


function App() {
    const client = new ApolloClient({
        uri: 'http://graphql-pokemon.now.sh/'
    });

    return (
        <ApolloProvider client={client}>
            <main>
                <div className="mainHead">
                    <h1 className="head">Pokemon GraphQl Database</h1>
                </div>
                <PokemonContainer />
            </main>
        </ApolloProvider>
    );
}

export default App;