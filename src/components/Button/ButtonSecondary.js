import './ButtonSecondary.scss';

function ButtonSecondary({ text= 'Add to cart', children}) {
    return (
        <button className="button-secondary">{ text }</button>
    )
}

export default ButtonSecondary;