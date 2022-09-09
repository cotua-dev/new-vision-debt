import { Layout } from '../components/Layout';
import styles from '../styles/shared.module.scss';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function Disqualify(): JSX.Element {
    return (
        <>
            <Layout title="Disqualified – New Vision Debt">
                <section className={styles['dq']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`We're Sorry`}</h1>
                        <p>
                            {`While we'd love to help, unfortunately, New Vision Debt does not currently offer loan programs that fit your criteria.`}
                        </p>
                        <p>{`Thank You!`}</p>
                        <p>{`New Vision Debt team`}</p>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Disqualify;
