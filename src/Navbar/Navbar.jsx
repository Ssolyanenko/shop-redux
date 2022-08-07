import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/img/logo192.png'
import MyButton from "../MyButton/MyButton";
import s from './Navbar.module.css'
import {getUser} from "../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import {logIn, logOut} from "../store/userSlicer";
import Form from "../Form/Form";
import Login from "../Login/Login";
import Basket from "../Basket/Basket";
const activeLink = (navData) => navData.isActive ? 'active' : ' '

const Navbar = () => {
    const [modal, setModal] = useState(false);
    const showModal = () => setModal(!modal);
    const closeModal = () => setModal(null);
    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const logInAction = () => {
        dispatch(logIn());
    };

    const logOutAction = () => {
        setModal(null)
        dispatch(logOut());
    };
    return (
        <div className={s.navbar}>
            <div className={s.logo}><img src={logo} alt="#"/></div>
            <NavLink to="/about">
                <li className={activeLink}>About</li>
            </NavLink>
            <NavLink to="/">
                <li className={activeLink}>Main</li>
            </NavLink>
            {user ? (
                <>
                    <MyButton
                        onClick={() => {
                            logOutAction();
                        }}
                    >
                        LOG OUT
                    </MyButton>

                    <Link className={s.cart} to='/cart'>
                        <Basket />
                    </Link>
                </>
            ) : (
                <>
                    <MyButton  onClick={() => showModal()}>
                        LOG IN
                    </MyButton>
                    <Login
                        className={s.modal}
                        show={modal}
                        close={showModal}
                        title='LOGIN'
                    >
                        <Form
                            logIn={() => {
                                logInAction();
                            }}
                            close={closeModal}
                        />
                    </Login>
                </>
            )}
        </div>
    );
};

export default Navbar;