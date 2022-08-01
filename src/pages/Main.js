// import { Link } from "react-router-dom";
import CardProducts from "../components/CardProducts/CardProducts";
import Current from "../components/Current/Current";

function Main() {
    return (
        <div>
            {/* <Link to={'about'}>About</Link> <br/> */}
            <Current/>
            <CardProducts/>
        </div>
    )
}

export default Main;