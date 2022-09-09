import styles from './CallUsNow.module.scss';

export function CallUsNow(): JSX.Element {
    return (
        <section className={styles['debt-advisors-call-us-now']}>
            <div className={styles['content-wrapper']}>
                <strong className={styles['content-text']}>
                    {`For expert debt resolution advice you can trust the licensed partners of New Vision Debt`}
                </strong>
                <a className={styles['phone-link']} href="tel:+18009211420">
                    <span className={styles['number']}>{`800-921-1420`}</span>
                    <span className={styles['text']}>{`CALL US NOW`}</span>
                </a>
            </div>
        </section>
    );
}
