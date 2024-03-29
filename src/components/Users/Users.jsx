import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import cls from './Users.module.css';

let Users = (props) => {
    return (
        <div className={ cls.users }>
            <Paginator
                currentPage={ props.currentPage }
                totalItemsCount={ props.totalCount }
                pageSize={ props.pageSize }
                onPageChanged={ props.onPageChanged }
            />
            <div className={ cls.users }>
                { props.users.map((user, i) => (
                    <User
                        key={ user.id }
                        user={ user }
                        followingInProgress={ props.followingInProgress }
                        follow={ props.follow }
                        unfollow={ props.unfollow }
                    />
                )) }
            </div>
        </div>
    );
};

export default Users;




/*import React from 'react';
import * as axios from 'axios';
import avatar from '../../assets/images/user.png';
import cls from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pagesCount2 = 0;

        pagesCount > 10 ? pagesCount2 = 10 : pagesCount2 = pagesCount;

        let pages = [];

        // for (let i = 1; i <= pagesCount; i++) {
        for (let i = 1; i <= pagesCount2; i++) {
            pages.push(i);
        }

        return (
            <div className={ cls.users }>
                <div className={ cls.pagination }>

                    <ul className={ cls.pagination__list }>

                        {
                            pages.map((page, i) => {
                                return <li className={ cls.pagination__item } key={ i.toString() }>
                                    <span
                                        className={
                                            this.props.currentPage === page
                                                ? `${cls.pagination__link} ${cls.active}`
                                                : `${cls.pagination__link}`
                                        }
                                        onClick={ (e) => this.onPageChanged(page) }
                                    >{ page }</span>
                                </li>
                                /!*return <li
                                    key={ i.toString() }
                                    className={
                                        this.props.currentPage === page
                                            ? `${cls.pagination__link} ${cls.active}`
                                            : `${cls.pagination__link}`
                                    }
                                    onClick={ () => this.props.setCurrentPage(page) }
                                >{ page }</li>*!/
                                /!*return <li className={ cls.pagination__item } key={ i.toString() }>
                                    <a
                                        href='?page=1'
                                        className={
                                            this.props.currentPage === page
                                                ? `${cls.pagination__link} ${cls.active}`
                                                : `${cls.pagination__link}`
                                        }
                                        onClick={ () => this.props.setCurrentPage(page) }
                                    >{ page }</a>
                                </li>*!/
                            })
                        }
                    </ul>
                </div>
                { this.props.users.map((el, i) => {
                    return <div className={ cls.user } key={ el.id }>
                        <div className={ cls.info }>
                            <div className={ cls.image }>
                                <img src={ el.photos.small != null ? el.photos.small : avatar } alt='' />
                            </div>
                            { el.followed
                                ? <button onClick={ () => this.props.unfollow(el.id) }>Unfollow</button>
                                : <button onClick={ () => this.props.follow(el.id) }>Follow</button>
                            }
                        </div>
                        <div className={ cls.content }>
                            <div className={ cls.name }>{ el.name }</div>
                            <div className={ cls.status }>{ el.status }</div>
                        </div>
                        <div className={ cls.location }>
                            <p className={ cls.country }>{ 'el.location.country' }</p>
                            <p className={ cls.city }>{ 'el.location.city' }</p>
                        </div>
                    </div>
                }) }
            </div>
        );
    }
}

export default Users;*/


/*
import * as axios from 'axios';
// import User from './User/User';
import avatar from '../../assets/images/user.png';
import cls from './Users.module.css';

const Users = (props) => {

    /!*let userElements = props.users.map((el, i) => {
       return <User
           key={ el.id }
           img={ el.img }
           followed={ el.followed }
           fullName={ el.fullName }
           status={ el.status }
           country={ el.location.country }
           city={ el.location.city }
       />
    });*!/

    let getUsers = () => {
        if (props.users.length === 0) {

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response);
                    props.setUsers(response.data.items);
                });

            // props.setUsers([
            //     { id: 1, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Dima', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            //     { id: 2, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Andrey', status: 'I am a boss too', location: { country: 'Russia', city: 'Moscow' }, followed: false },
            //     { id: 3, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Sveta', status: 'I am a boss too', location: { country: 'Kyiv', city: 'Ukraine' }, followed: true },
            //     { id: 4, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Sasha', status: 'I like football', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            //     { id: 5, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Viktor', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: true },
            //     { id: 6, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Valera', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            //     { id: 7, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Alex', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
            // ]);
        }
    }

    let userElements = props.users.map((el, i) => {
        return <div className={ cls.user } key={ el.id }>
            <div className={ cls.info }>
                <div className={ cls.image }>
                    <img src={ el.photos.small != null ? el.photos.small : avatar } alt='' />
                </div>
                { el.followed
                    ? <button onClick={ () => props.unfollow(el.id) }>Unfollow</button>
                    : <button onClick={ () => props.follow(el.id) }>Follow</button>
                }
            </div>
            <div className={ cls.content }>
                <div className={ cls.name }>{ el.name }</div>
                <div className={ cls.status }>{ el.status }</div>
            </div>
            <div className={ cls.location }>
                <p className={ cls.country }>{ 'el.location.country' }</p>
                <p className={ cls.city }>{ 'el.location.city' }</p>
            </div>
        </div>
    });

    return (
        <div className={ cls.users }>
            <button onClick={ getUsers }>Get users</button>
            { userElements }
        </div>
    );
}

export default Users;*/
