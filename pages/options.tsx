import { Jumbotron } from '../components/options/Jumbotron';
import { Scenarios } from '../components/options/Scenarios';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function Options(): JSX.Element {
    return (
        <Layout title="Options – New Vision Debt">
            <Jumbotron/>
            <Scenarios/>
        </Layout>
    );
}

export default Options;
