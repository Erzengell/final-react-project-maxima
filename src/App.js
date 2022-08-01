import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Default from './layouts/Default/Default';
import RegistertPage from './pages/RegistertPage';
import Main from './pages/Main';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import Reg from './layouts/Reg/Reg';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Default/>}>
                <Route index element={<Main/>}/>
                {/* <Route path={'/about'} element={<RegistertPage/>}/> */}
                <Route path={'/cart'} element={<CartPage/>}/>
                <Route path={'/products/:productId'} element={<ProductPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
            <Route path={'/'} element={<Reg />}>
                <Route path={'/sign-up'} element={<RegistertPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
