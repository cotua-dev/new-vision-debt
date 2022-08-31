import styles from './Scenarios.module.scss';

export function Scenarios(): JSX.Element {
    return (
        <section className={styles['debt-advisors-scenarios']}>
            <details open>
                <summary>
                    <strong className={styles['summary-title']}>{`Debt Restructure`}</strong>
                    <p className={styles['summary-content']}>
                        {`Debt restructure, or debt negotiation, sometimes the process of negotiating with a creditor or debt collector to pay less than the full amount owed. By paying less than the full balance you owe on an account to satisfy the debt`}
                    </p>
                </summary>
                <div className={styles['pros-cons-wrapper']}>
                    <div className={styles['pros-wrapper']}>
                        <div className={styles['pros-header']}>
                            <strong className={styles['header-title']}>{`Pros`}</strong>
                        </div>
                        <p className={styles['pros-content']}>
                            {`Skilled strategists and negotiators are working on your behalf. Provide immediate payment relief. Be free of enrolled debt in under 4 years`}
                        </p>
                    </div>
                    <div className={styles['cons-wrapper']}>
                        <div className={styles['cons-header']}>
                            <strong className={styles['header-title']}>{`Cons`}</strong>
                        </div>
                        <p className={styles['cons-content']}>
                            {`Prevents the use of enrolled credit cards. Could adversely affect your credit worthiness. May temporarily increase the amount owed due to the accrual of fees and interest`}
                        </p>
                    </div>
                </div>
            </details>
            <details open>
                <summary>
                    <strong className={styles['summary-title']}>{`Bankruptcy`}</strong>
                    <p className={styles['summary-content']}>
                        {`A legal process. All your assets are evaluated and used to pay off your debts. Chapter 7 and Chapter 13 are most common options used by individuals circumstances,  once bankruptcy is complete, you are relieved of the debt obligations you had before filing bankruptcy`}
                    </p>
                </summary>
                <div className={styles['pros-cons-wrapper']}>
                    <div className={styles['pros-wrapper']}>
                        <div className={styles['pros-header']}>
                            <strong className={styles['header-title']}>{`Pros`}</strong>
                        </div>
                        <p className={styles['pros-content']}>
                            {`Debt obligation could be cleared. Most creditors are barred from attempting to collect on debts. Under some circumstances, process takes only 3-6 months`}
                        </p>
                    </div>
                    <div className={styles['cons-wrapper']}>
                        <div className={styles['cons-header']}>
                            <strong className={styles['header-title']}>{`Cons`}</strong>
                        </div>
                        <p className={styles['cons-content']}>
                            {`Significant, long-term damage to credit. Loss of all credit cards. Chapter 7 can be difficult to qualify for`}
                        </p>
                    </div>
                </div>
            </details>
            <details open>
                <summary>
                    <strong className={styles['summary-title']}>{`Minimum Payments`}</strong>
                    <p className={styles['summary-content']}>
                        {`Making the minimum payments on your credit cards is a strategy that merely prolongs your debt. Minimum payments should only be used as a temporary strategy to pay off your credit card debt you are able to become debt free in a shorter period`}
                    </p>
                </summary>
                <div className={styles['pros-cons-wrapper']}>
                    <div className={styles['pros-wrapper']}>
                        <div className={styles['pros-header']}>
                            <strong className={styles['header-title']}>{`Pros`}</strong>
                        </div>
                        <p className={styles['pros-content']}>
                            {`Consistent monthly payments. Gradually reducing debt. No negative impact on your credit`}
                        </p>
                    </div>
                    <div className={styles['cons-wrapper']}>
                        <div className={styles['cons-header']}>
                            <strong className={styles['header-title']}>{`Cons`}</strong>
                        </div>
                        <p className={styles['cons-content']}>
                            {`High monthly payments. High-interest rates. High levels of debt can hurt your credit over time. Very long pay off time frame. Could pay 2 to 3 times the amount originally charged`}
                        </p>
                    </div>
                </div>
            </details>
        </section>
    );
}
