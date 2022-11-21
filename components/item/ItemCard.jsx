import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export const ItemCard = ({ item }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/item/${ item.id }`);
    }

    return (
        <Grid xs={ 4 } sm={ 3 } md={ 2 } xl={ 1 } key={ item.id }>
            <Card 
                isHoverable 
                isPressable 
                onClick={ onClick }
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={ item.img }
                        width="100%"
                        height={ 140 }
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform='capitalize'>{ item.name }</Text>
                        <Text>#{ item.id }</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
