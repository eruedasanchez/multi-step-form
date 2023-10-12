import './Acknowledgment.css';
import checkmarkIcon from './icon-thank-you.svg';


const Acknowledgment = () => {
    return (
        <div className="container-form">
            <div className="container-acknowledgment">
                <img className="container-acknowledgment__image" src={checkmarkIcon} alt="icon checkmark"/>
                <h1 className="container-acknowledgment__title">Thank you!</h1>
                <p className="container-acknowledgment__description">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}

export default Acknowledgment;