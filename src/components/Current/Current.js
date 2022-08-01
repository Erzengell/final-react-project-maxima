import { useEffect, useState } from "react";
import Button from '../Button/Button';
import './Current.scss';

const text = 'Buy now';

function Current() {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch('https://fake-items-api.herokuapp.com/items/5')
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, [])

    return (
        <>
            <div className='current'>
                <div className="current__container">
                    <div className="current__left">
                        <h1 className="current__title">Apple Watch<br/> Series 6</h1>
                        <p className='current__description'>Get the fashion that metters with time. it is the best watch for your time.</p>
                        <Button text={ text }></Button>
                    </div>
                    <div className="current__right">
                        <img className="current__image" alt="apple watch" src={ products.image }></img>
                    </div>
                </div>
            </div>
        </>
        
    )




    
}

export default Current;