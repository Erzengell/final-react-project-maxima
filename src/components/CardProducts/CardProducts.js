import './CardProducts.scss';
// import { Link } from "react-router-dom";
// import Button from '../Button/Button';
import { useEffect, useState } from "react";
import Card from '../Card/Card';
// import { CircularProgress } from '@mui/material';


function CardProducts() {

    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch('https://kind-puce-cricket-kit.cyclic.app/items')
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, [])

    const [value, setValue] = useState('');

    const filterProducts = products.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase());
    })

    return (
        <>
            <div className={'products'}>
                <div className={'products__search'}>
                    <input 
                        type="text"
                        placeholder='Search products..'
                        className={'search'}
                        onChange={(event) => setValue(event.target.value)}
                        />
                </div>
                
                <div className={'products__container'}>
                    {
                        !filterProducts.length && (<div className='circular-progress'>Nothing found</div>)
                    }
                    {
                        filterProducts.map((product) => {
                            return (
                                <>
                                    <Card key={product.id} 
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    /> 
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )


    // return (







//         <div className={'products'}>
//                 <div className={'products__container'}>
//                     <Link to={'/'} className={'card products__card'}>
//                         <div className={'card__img-wrapper'}>
//                             <img className={'card__img'}></img>
//                         </div>
//                         <div className='card__title-wrapper'>
//                             <h2 className='card__title'></h2>
//                         </div>
//                         <div className='card__button-wrapper'>
//                             <Button></Button>
//                             <div className='card__price'>Price</div>
//                         </div>
//                     </Link>
//                 </div>
//         </div>
//     )
}

export default CardProducts;
