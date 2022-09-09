export function WhatWeDo(): JSX.Element {
    return (
        <section className="py-12 px-2 flex">
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center">
                <div className="max-w-prose text-center mb-4 xl:text-left xl:max-w-lg">
                    <h2 className="text-4xl text-daa-purple font-black mb-2">
                        {`Save Thousands Off Your Consumer Debts`}
                    </h2>
                    <p className="font-light">
                        {`Dealing with debts from credit cards, loans and medical bills can be a daunting process. We partnered with a network of nationwide attorneys that can negotiate and resolve your debts.`}
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center xl:justify-end gap-4">
                    <div className="max-w-prose text-center xl:text-left xl:max-w-xs">
                        <strong className="text-2xl text-daa-purple font-black mb-2">
                            {`Cut Your Debt`}
                        </strong>
                        <p className="font-light">
                            {`Specialized debt litigation attorneys fight creditors so your unsecured debts are invalidated through the FDCPA (Fair Debt Collection Practices Act).`}
                        </p>
                    </div>
                    <div className="max-w-prose text-center xl:text-left xl:max-w-xs">
                        <strong className="text-2xl text-daa-purple font-black mb-2">
                            {`Save Your Money`}
                        </strong>
                        <p className="font-light">
                            {`Why scramble each month to make your high-interest minimum payments. Start putting that money back in your pocket for future emergencies.`}
                        </p>
                    </div>
                    <div className="max-w-prose text-center xl:text-left xl:max-w-xs">
                        <strong className="text-2xl text-daa-purple font-black mb-2">
                            {`Erase Bad Credit`}
                        </strong>
                        <p className="font-light">
                            {`Watch thousands of dollars in charge-offs & delinquencies disappear as they are disputed by our nationwide debt resolution legal team.`}
                        </p>
                    </div>
                    <div className="max-w-prose text-center xl:text-left xl:max-w-xs">
                        <strong className="text-2xl text-daa-purple font-black mb-2">
                            {`Unsecured Loans`}
                        </strong>
                        <p className="font-light">
                            {`Get access to low-interest, unsecured loans. We shop multiple loan programs and banks to get you the lowest rates and terms.`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
