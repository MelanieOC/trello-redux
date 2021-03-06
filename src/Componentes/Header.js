import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../trello-logo-white.svg';
import { NavLink } from 'react-router-dom';
import { signOut } from '../actions/actions';

const Header = ({ user }) => {
    return (
        <header id='header'>
            <span>
                <NavLink to='/boards'>
                    <i class="fa fa-columns" aria-hidden="true"></i>
                    <span> Boards</span>
                </NavLink>
            </span>
            <Image src={logo} width='200px' />
            <span>
                <a href='#'>
                    <span> {user.name} {user.lastName}</span>
                </a>
                <NavLink to='/signin' onClick={() => signOut()}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <span> Sign Out</span>
                </NavLink>
            </span>
        </header>
    );
}

export default Header;