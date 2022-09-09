import { Stepper } from '../components/Stepper';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function StepperPage(): JSX.Element {
    return (
        <Layout title="Stepper - New Vision Debt">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default StepperPage;
