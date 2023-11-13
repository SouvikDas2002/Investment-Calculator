
export default function UserInput({onUserInput,userInput}){

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    {/* Two Way Binding */}
                    <label>Initial Investment :</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(e)=>onUserInput("initialInvestment",parseInt(e.target.value))}/>
                </p>
                <p>
                    <label>Annual Investment :</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(e)=>onUserInput("annualInvestment",parseInt(e.target.value))}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return :</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(e)=>onUserInput("expectedReturn",parseInt(e.target.value))}/>
                </p>
                <p>
                    <label>Duration :</label>
                    <input type="number" value={userInput.duration} required onChange={(e)=>onUserInput("duration",parseInt(e.target.value))}/>
                </p>
            </div>
        </section>
    )
}