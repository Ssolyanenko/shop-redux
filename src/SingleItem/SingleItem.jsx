import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../store/cartSlice";
import s from './SingleItem.module.css'
import MyButton from "../MyButton/MyButton";
import Preloader from "../Preloader/Preloader";

const SingleItem = ({loading,setLoading}) => {
    const dispatch = useDispatch();
    const addItemAction = (item, countItem = 1) => {
        dispatch(addItem({ item: item, count: countItem }));
    };
    const [item, setItem] = useState({});
    const { id } = useParams();
    const [countItem, setCountItem] = useState(0);

    const incCount = () => {
        setCountItem(countItem + 1);
    };

    const decCount = () => {
        return countItem > 0 ? setCountItem(countItem - 1) : setCountItem(0);
    };

    useEffect(() => {
        fetch(`https://6175c7dd03178d00173da9e3.mockapi.io/api/v1/product/${id}`)
            .then((response) => response.json())
            .then((item) => {
                setItem(item);
                setLoading(true);

            });
    }, [id]);

    return (


            <div className={s.wrapper}>
                <div className={s.pic}>
                    <img src={item.img} alt="item" className="item_image"/>
                </div>
                <div className="info_right">
                    <h3 className="item_title">{item.title}</h3>
                    <p className="item_type">Category: {item.type}</p>
                    <p className="item_price">Price: {item.price} $</p>
                    <p>{item.description}</p>
                </div>
                <div className={s.buttons}>
                        <MyButton onClick={incCount}>+</MyButton>
                        <MyButton onClick={decCount}>-</MyButton>
                        <MyButton
                            onClick={() => {
                                addItemAction(item, countItem);
                            }}
                        >
                            Add to cart: {countItem}
                        </MyButton>

                </div>
                  </div>


    )
};



export default SingleItem;