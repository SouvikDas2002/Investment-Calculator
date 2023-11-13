import {calculateInvestmentResults,formatter} from '../util/investment'
export default function Results({input}){
    const resultData=calculateInvestmentResults(input);
    console.log(resultData[0]);
    const initialInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;
    console.log(initialInvestment);
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>YEAR</th>
                    <th>INVESTMENT VALUE</th>
                    <th>INTEREST (YEAR)</th>
                    <th>TOTAL INTEREST</th>
                    <th>INVESTED CAPITAL</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yearData=>{
                    const totalInterest=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
                    const totalAmountInvested=yearData.valueEndOfYear-totalInterest;
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        // <tr>{yearData.in}</tr>
                    )
                })}
            </tbody>
        </table>
    )
}