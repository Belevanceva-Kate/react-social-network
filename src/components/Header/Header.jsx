import { NavLink } from 'react-router-dom';
import cls from './Header.module.css';

const Header = (props) => {
	return (
		<header className={ cls.header }>
			<div className={ cls.logo }>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'
					alt="logo"
				/>
			</div>
			<div className={ cls.auth }>
				{
					props.isAuth
						? <div className={ cls.auth__info }>
							<span className={ cls.auth__login }>{ props.login }</span>
							{
								props.avatar
									? <div className={ cls.auth__image }>
										<img src={ props.avatar } alt='avatar'/>
									</div>
									: null
							}
							<button onClick={ props.logout }>Logout</button>
						</div>
						: <NavLink to={ '/login' }>Login</NavLink>
				}
			</div>
		</header>
	);
}

export default Header;