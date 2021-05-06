import cls from './Contact.module.css';

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={ cls.contact }>
            <p><b>{ contactTitle }:</b> { contactValue }</p>
        </div>
    );
}

export default Contact;