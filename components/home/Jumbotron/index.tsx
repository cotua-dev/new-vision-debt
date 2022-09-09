import Link from 'next/link';
import jumbotronImage from '../../../public/images/home-boy-girl.png';
import bbbImage from '../../../public/images/bbb.png';
// import afccImage from '../../../public/images/afcc.png';
import styles from './Jumbotron.module.scss';

export function Jumbotron(): JSX.Element {
    return (
        <section className={styles['debt-advisors-jumbotron']}>
            <picture>
                <source srcSet={jumbotronImage.src}/>
                <img
                    className={styles['jumbotron-image']}
                    src={jumbotronImage.src}
                    alt="Home Page Jumbotron Image"
                    loading="lazy"
                />
            </picture>
            <div className={styles['jumbotron-content-wrapper']}>
                <h1 className={styles['jumbotron-title']}>{`Reduce Your Monthly Payments Today!`}</h1>
                <p className={styles['jumbotron-content']}>{`Have more than $5,000 of debt? See how much you can save with our debt calculator.`}</p>
                <Link href="/stepper">
                    <a className={styles['start-button']}>{`Start - it's free!`}</a>
                </Link>
            </div>
        </section>
    );
}
