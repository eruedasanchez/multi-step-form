import './StepSidebar.css';

const StepSidebar = ({stepActive, number, title}) => {
    
    return (
        <div className="step">
            <div className={stepActive === number ? "step__number active" : "step__number"}>
                <span>{number}</span>
            </div>
            <div className="step__text">
                <p className="step__text-header">step {number}</p>
                <p className="step__text-title">{title}</p>
            </div>
        </div>
    )
}

export default StepSidebar;