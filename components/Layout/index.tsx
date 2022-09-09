import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { LayoutProps } from './Layout.interfaces';

export function Layout(props: LayoutProps = { title: 'New Vision Debt', children: [] }): JSX.Element {
    return (
        <>
            <Header title={props.title} description="Dealing with debts from credit cards, loans and medical bills can be a daunting process. We partnered with a network of nationwide attorneys that can negotiate and resolve your debts."/>
            <Navigation/>
            <main role="main">
                {props.children}
            </main>
            <Footer/>
        </>
    );
}
