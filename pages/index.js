
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

export default function HomePage(props) {

    console.log({props});

    return (
        <Layout title="Quiniela mundialista">
            <ul>
                <li>Country</li>
                <li>Country</li>
                <li>Country</li>
                <li>Country</li>
                <li>Country</li>
            </ul>
            <Button color="gradient">Clic me</Button>
        </Layout>
    );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {

    console.log('Hola mundo');

    return {
        props: {
            
        }
    }
}
