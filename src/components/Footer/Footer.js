import './Footer.scss';
import logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className={"footer"}>
            <div className={"footer__container"}>
                <div className={"footer__column"}>
                    <h5 className={"footer__product-category"}>Категории товаров</h5>
                    <ul className={"footer__list list"}>
                        <li className={"list__link"}>
                            <a className={"footer__link"} href="#">Бытовая техника</a>
                        </li>
                        <li className={"list__link"}>
                            <a className="footer__link" href="#">Электроника</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Одежда</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Обувь</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Аксессуары</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h5 className="footer__product-category">Разделы сайта</h5>
                    <ul className="footer__list list">
                        <li className="list__link">
                            <a className="footer__link" href="#">Магазина</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Контакты</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Блог</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Политика конфиденциальности</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Договор оферты</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">О нас</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h5 className="footer__product-category">Полезные ссылки</h5>
                    <ul className="footer__list list">
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">Google.com</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">Yandex.ru</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">developer.mozilla.org</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">mdn.</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column column">
                    <Link to={'/'}><img src={logo} alt={'logo'} className={'footer__logo logo'}></img></Link>
                    {/* <img className="logo" src="img/logo/logo2.svg" alt="Company's logo"></img> */}
                    <p className="copyright">(с) Интернет-магазин 2022</p>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;