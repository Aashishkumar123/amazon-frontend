import logo from "../../static/images/amazon-white-logo.png";
import { Link } from "react-router-dom";


export const Logo = ()=>{
    return(
        <>
            <div className="amazon-logo">
                <Link to="/" className="text-white">
                    <img src={logo} alt="amazon-logo" className="img-fluid" />
                    <span className="dot-in">.in</span>
                </Link>
            </div>
        </>
    )
}
