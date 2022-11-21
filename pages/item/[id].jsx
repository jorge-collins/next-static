import { useRouter } from "next/router";
import React from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";

// --- Ejemplo con pokemon
const ItemPage = ({pokemon}) => {

    console.log(pokemon);
    const router = useRouter();

    return (
        <Layout title={'Un item'}>
            <h1>{ pokemon.name }</h1>
        </Layout>
    );
};



export const getStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1 }` );

    return {
        paths: pokemons151.map( id => ({
            params: { id }
        })),
        fallback: false
    }
}



export const getStaticProps = async ({ params }) => {

    const { id } = params;

    const { data } = await pokeApi.get(`/pokemon/${ id }`);

    return {
        props: {
            pokemon: data
        }
    }
}
// Ejemplo con pokemon ---



export default ItemPage;
