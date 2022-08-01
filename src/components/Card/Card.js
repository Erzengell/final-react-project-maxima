import { Link } from 'react-router-dom';
import ButtonSecondary from '../Button/ButtonSecondary';
import './Card.scss';


function Card({ id, title, image, price, description }) {

    return (
        <div className={'products__wrapper'}>
            <div className={'card products__card'}>
                <div className={'card__img-wrapper'}>
                    <img className={'card__img'} src={ image } alt='product'></img>
                </div>
                <div className='card__title-wrapper'>
                    <h3 className={'card__title'}><Link to={`/products/${id}`}>{ title }</Link></h3>
                </div>
                <div className='card__button-wrapper'>
                    <ButtonSecondary></ButtonSecondary>
                    <div className='card__price'>{ price }</div>
                </div>
            </div>
            {/* <img className={'card__img'} src={ image }></img>
            <h3><Link to={`/products/${id}`}>{ title }</Link></h3> */}
        </div>
    )
}

export default Card;