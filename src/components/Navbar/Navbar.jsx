import { NavLink } from 'react-router-dom';
import FriendsContainer from "./Friends/FriendsContainer";
import cls from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<aside className={ cls.navbar }>
			<nav className={ cls.nav }>
				<ul className={ cls.list }>
					{/*<li className={ `${cls.item} ${cls.active}` }>*/}
					<li className={ cls.item }>
						<NavLink 
							to='/profile'
							className={ cls.link } 
							activeClassName={ cls.active }
						>Profile</NavLink>
					</li>
					<li className={ cls.item }>
						<NavLink 
							to='/dialogs'
							className={ cls.link } 
							activeClassName={ cls.active }
						>Messages</NavLink>
					</li>
					<li className={ cls.item }>
						<NavLink 
							to='/news'
							className={ cls.link } 
							activeClassName={ cls.active }
						>News</NavLink>
					</li>
					<li className={ cls.item }>
						<NavLink 
							to='/music'
							className={ cls.link } 
							activeClassName={ cls.active }
						>Music</NavLink>
					</li>
					<li className={ cls.item }>
						<NavLink
							to='/users'
							className={ cls.link }
							activeClassName={ cls.active }
						>Users</NavLink>
					</li>
					<li className={ cls.item }>
						<NavLink 
							to='/settings'
							className={ cls.link } 
							activeClassName={ cls.active }
						>Settings</NavLink>
					</li>
				</ul>
			</nav>
			<FriendsContainer />
		</aside>
	);
}

export default Navbar;