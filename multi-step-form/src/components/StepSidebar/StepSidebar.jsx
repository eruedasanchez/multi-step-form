import './StepSidebar.css';

const StepSidebar = ({number, title}) => {
    
    return (
        <div className="step">
        <div className="step__number active"><span>{number}</span></div>
        <div className="step__text">
            <p className="step__text-header">step {number}</p>
            <p className="step__text-title">{title}</p>
        </div>
    </div>
    )
}

export default StepSidebar;