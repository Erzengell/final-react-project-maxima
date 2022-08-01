import './Reg.scss';
import { Outlet } from "react-router-dom";

function Reg() {
    return (
        <div className={"loginLayout"}>
            <Outlet/>
        </div>
    )
}

export default Reg;