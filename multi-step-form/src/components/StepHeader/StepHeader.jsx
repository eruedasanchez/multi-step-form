import './StepHeader.css';

const StepHeader = ({title, subtitle}) => {
    return (
        <div className="form__text">
            <h1 className="form__text-title">{title}</h1>
            <p className="form__text-subtitle">{subtitle}</p>
        </div>
    )
}

export default StepHeader;