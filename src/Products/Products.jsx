import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/cartSlice";
import MyButton from "../MyButton/MyButton";
import {getUser} from "../store/selectors";
import s from './Products.module.css'
import Preloader from "../Preloader/Preloader";
const Products = ({loading,setLoading}) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(getUser);


    useEffect(() => {
        fetch('https://6175c7dd03178d00173da9e3.mockapi.io/api/v1/product')
            .then((response) => response.json())
            .then((items) => {
                setProducts(items.splice(0,9));
                setLoading(true)

            });
    }, []);

    const handleAddProduct = (products) => {
        dispatch(addItem({ item: products, count: 1 }));
    };

    return (

            <>
                <div>

                    <ul>
                        {!loading &&
                            <Preloader/>
                        }
                        {products.map((item) => {
                            return (
                                <li className={s.productItem} key={item.id}>
                                    <img className={s.img} alt='#' src={item.img} />
                                    <div className={s.productList}>
                                        <Link className={s.title} to={`/${item.id}`}>
                                            <h3>{item.title}</h3>
                                        </Link>
                                        <div className={s.price}>{item.price}$</div>

                                        {user ? (
                                            <>
                                                <MyButton
                                                    className={s.bttn}
                                                    onClick={() => {
                                                        handleAddProduct(item);
                                                    }}
                                                >
                                                    Add to cart
                                                </MyButton>
                                            </>
                                        ) : (
                                            <>
                                                <MyButton>Log in to add an item to your cart</MyButton>
                                            </>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>

    );
};

export default Products;