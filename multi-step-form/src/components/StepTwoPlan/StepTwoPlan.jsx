import './StepTwoPlan.css';

const StepTwoPlan = ({icon, planName, planPrice, selected, onSelect, planMonthly}) => {
    
    const handleSelectedPlan = () => {
        onSelect(planName); 
        // Ejecuta la funcion handlePlanSelect(planName), es decir, 
        // se actualiza el valor de selectedPlan y comparamos cual 
        // se esta seleccionando, y se almacena el valor booleano en
        // la variable selected 
    }
    
    return (
        <button onClick={handleSelectedPlan} className={`btn-plan ${selected ? 'selected' : ''}`}>
            <div className="plan">
                <div className="plan__image">
                    <img src={icon} alt={`${planName}-name`}/>
                </div>
                <div className="plan__info">
                    <p className="plan__info-name">{planName}</p>
                    <p className="plan__info-price">{planPrice}</p>
                    {!planMonthly && <p className="plan__info-free">2 months free</p>}
                    
                </div>
            </div>
        </button>
    )
}

export default StepTwoPlan;