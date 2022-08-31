import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';
import { PageProps } from '../../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function MedicalPage(): JSX.Element {
    return (
        <>
            <Header title="Medical Debt - Debt Advisors"/>
            <Navigation/>
            <main>
                <Stepper stepper-type="full"/>
            </main>
            <Footer/>
        </>
    );
}

export default MedicalPage;
