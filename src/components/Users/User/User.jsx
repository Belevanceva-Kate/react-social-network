import { NavLink } from 'react-router-dom';
import cls from './User.module.css';
import avatar from '../../../assets/images/user.png';

const User = (props) => {
    return (
        <div className={ cls.user } key={ props.user.id }>
            <div className={ cls.info }>
                <NavLink to={ '/profile/' + props.user.id }>
                    <div className={ cls.image }>
                        <img src={ props.user.photos.small != null ? props.user.photos.small : avatar } alt='' />
                    </div>
                </NavLink>
                { props.user.followed
                    ? <button
                        disabled={ props.followingInProgress.some(id => id === props.user.id) }
                        onClick={ () => { props.unfollow(props.user.id); } }
                    >Unfollow</button>
                    : <button
                        disabled={ props.followingInProgress.some(id => id === props.user.id) }
                        onClick={ () => { props.follow(props.user.id); } }
                    >Follow</button>
                }
            </div>
            <div className={ cls.content }>
                <div className={ cls.name }>{ props.user.name }</div>
                <div className={ cls.status }>{ props.user.status }</div>
            </div>
            <div className={ cls.location }>
                <p className={ cls.country }>{ 'props.user.location.country' }</p>
                <p className={ cls.city }>{ 'props.user.location.city' }</p>
            </div>
        </div>
    );
}

export default User;


/*
import cls from './User.module.css';

const User = (props) => {
    return (
        <div className={ cls.user }>
            <div className={ cls.info }>
                <div className={ cls.image }>
                    <img src={ props.img } alt='' />
                </div>
                {/!*{ props.followed ?*!/}
                {/!*    <button onClick={ follow }>Follow</button> :*!/}
                {/!*    <button onClick={ unfollow }>Unfollow</button> }*!/}
            </div>
            <div className={ cls.content }>
                <div className={ cls.name }>{ props.fullName }</div>
                <div className={ cls.status }>{ props.status }</div>
            </div>
            <div className={ cls.location }>
                <p className={ cls.country }>{ props.country }</p>
                <p className={ cls.city }>{ props.city }</p>
            </div>
        </div>
    );
}

export default User;*/
