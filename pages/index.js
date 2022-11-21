
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

import axios from 'axios';
import { pokeApi, worldCupApi } from "../api";
import { ItemCard } from "../components/item";

import { Layout } from "../components/layouts";

export default function HomePage(props) {

    // const { groups, teams } = props;
    
    //--- Ejemplo con pokemon
    const { pokemons } = props;
    // console.log({pokemons});
    return (
        <Layout title="Quiniela mundialista">
            <Grid.Container gap={ 2 } justify='flex-start'>
                { 
                    // teams.map( ({ name, flagURL, group_letter }, index ) => (

                    //     <Grid xs={ 4 } sm={ 3 } md={ 2 } xl={ 1 } key={ index }>
                            
                    //         <Card isHoverable >
                                
                    //             <Card.Body css={{ p: 1 }}>
                    //                 <Card.Image 
                    //                     src={ flagURL }
                    //                     width={ "100%" }
                    //                     height={ 140 }
                    //                 />
                    //             </Card.Body>
                    //             <Card.Footer>
                    //                 <Row justify='space-between'>
                    //                     <Text>{ name }</Text>
                    //                     <Text>Grupo { group_letter }</Text>
                    //                 </Row>
                    //             </Card.Footer>
                    //         </Card>
                    //     </Grid>
                    // ) ) 

                    
                    //TODO: Pasar el ejemplo de las banderas a ItemCard -------

                
                    //--- Ejemplo con pokemon
                    pokemons.map( ({ name, id, img }) => (
                        <ItemCard item={{name, id, img}} key={ id } />
                        
                    ))
                }
            </Grid.Container>
            <Button color="gradient">Clic me</Button>
        </Layout>
    );
}



export const getStaticProps = async (ctx) => {

    // const { data } = await axios.get('https://world-cup-json-2022.fly.dev/teams');  
    // const { groups } = data;
    // const teams = [];

    // groups.map((group) => (
    //     teams.push(...group.teams)
    // ))

    // teams.forEach( (team, index) => (
    //     teams[index].flagURL = `https://countryflagsapi.com/png/${team.country}`
    // ))
    // console.log(teams);


    //--- Ejemplo con pokemon
    const { data } = await pokeApi.get('/pokemon?limit=151');
    const { results } = data;
    results.forEach( (pokemon, index) => {

        results[index].id = index + 1;
        results[index].img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`;
    });
    
    return {
        props: {
            // groups: data.groups,
            // teams: teams
            

            //--- Ejemplo con pokemon
            pokemons: data.results
        }
    }
}
