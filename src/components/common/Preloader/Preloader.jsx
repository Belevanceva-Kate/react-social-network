import preloader from '../../../assets/images/preloader.svg';
import cls from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={ cls.preloader }>
            <div className={ cls.image }>
                <img src={ preloader } alt='preloader' />
            </div>
        </div>
    );
}

export default Preloader;

