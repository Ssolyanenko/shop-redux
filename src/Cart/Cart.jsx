import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../store/selectors";
import {addItem, clearCart, fullRemoveItem, removeItem} from "../store/cartSlice";
import s from './Cart.module.css'
import MyButton from "../MyButton/MyButton";



    const Cart = () => {
        const cart = useSelector(getCart);
        const dispatch = useDispatch();

        const addItemAction = (item, countItem = 1) => {
            dispatch(addItem({ item: item, count: countItem }));
        };

        const removeItemAction = (item, countItem = 1) => {
            dispatch(removeItem({ item: item, count: countItem }));
        };

        const clearCartAction = () => {
            dispatch(clearCart());
        };

        const fullRemoveItemAction = (item) => {
            dispatch(fullRemoveItem({ id: item.id }));
        };

        return (
            <div className={s.wrapper}>
                    {cart.map((item) => {
                        return (
                            <div className={s.content}>
                           <div key={item.id}></div>
                        <div className={s.title} >{item.title}</div>
                                <div className={s.imageF} ><img src={item.img} alt=""/></div>
                            <div className={s.price}> {item.price} $</div>
<div className={s.buttonFlex}>
                                <MyButton
                                        onClick={() => {
                                            addItemAction(item);
                                        }}
                                    >
                                        +
                                    </MyButton>
                                    &nbsp;{item.count}&nbsp;
                                    <MyButton
                                        onClick={() => {
                                            removeItemAction(item);
                                        }}
                                    >
                                        -
                                    </MyButton>
</div>
<div style={{display:"flex",
justifyContent:'center',
marginBottom:'20px'}}>
                                    <MyButton
                                        onClick={() => {
                                            fullRemoveItemAction(item);
                                        }}
                                    >
                                        Remove item
                                    </MyButton>
</div>
           </div>
                        );
                    })}

                <h2>
                    Total:
                    {cart.reduce(
                        (prev_val, item) => (prev_val += item.price * item.count),
                        0
                    )}
                    $
                </h2>
                <div style={{marginBottom:'10px'}}>
                <MyButton  onClick={clearCartAction}>Clear cart</MyButton>
                {/*<MyButton disabled={cart.length === 0}>Pay</MyButton>*/}
                </div>
            </div>

        );
    };

    export default Cart;