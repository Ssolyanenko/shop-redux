import React from 'react';
import {useSelector} from 'react-redux';
import {getCart} from "../store/selectors";
import MyButton from "../MyButton/MyButton";
import shopping from '../assets/img/shoping.svg'
import s from './Basket.module.css'

const Basket = () => {
    const cart = useSelector(getCart);
    return (
        <MyButton>

            Products: {cart.reduce((prev_val, item) => (prev_val += item.count), 0)}{' '}
            |&nbsp;
            <img className={s.shop} src={shopping} alt="#"/>
            |&nbsp;
            Total price:{cart.reduce(
            (prev_val, item) => (prev_val += item.price * item.count),
            0
        )}
            $
        </MyButton>
    );
};

export default Basket;
