import cls from './User.module.css';

const User = (props) => {
    return (
        <div className={ cls.user }>
            <div className={ cls.info }>
                <div className={ cls.image }>
                    <img src={ props.img } alt='' />
                </div>
                {/*{ props.followed ?*/}
                {/*    <button onClick={ follow }>Follow</button> :*/}
                {/*    <button onClick={ unfollow }>Unfollow</button> }*/}
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

export default User;