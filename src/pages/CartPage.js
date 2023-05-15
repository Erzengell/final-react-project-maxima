import ButtonSecondary from '../components/Button/ButtonSecondary';
import './style/CartPage.scss';
import { useSelector } from 'react-redux';


function CartPage() {
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, {id, title, image, price} = shop) => acc += price, 0)
    return (
        <div className={"cart"}>
            <div className={'cart__container'}>
                <div className={"cart__up"}>
                    <div className={''}>There are no items in your bag.</div>
                    <div className={'cart__products'}>
                        <div className={'cart__'}>
                            {
                                items.length > 0
                            }
                        </div>
                    </div>
                </div>
                <div className={"cart__down"}>
                    <div className={""}>
                        <p>Количество</p>
                        <p> { totalPrice } €</p>
                        <ButtonSecondary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;