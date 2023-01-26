import { Link } from "react-router-dom"
import logo from "../../static/images/amazon-white-logo.png";


export const FootersectionOne = ()=>{
    return(
        <>
            <div className="amazon-footer-section-one py-5">
                <div className="d-flex justify-content-around">
                    <div className="">
                        <h5>Get to Know Us</h5>
                        <Link>About Us</Link><br />
                        <Link>Carrers</Link><br />
                        <Link>Press Releases</Link><br />
                        <Link>Amazon Science</Link>
                    </div>
                    <div className="">
                        <h5>Connect with Us</h5>
                        <Link>Facebook</Link><br />
                        <Link>Twitter</Link><br />
                        <Link>Instagram</Link>
                    </div>
                    <div className="">
                        <h5>Make Money with Us</h5>
                        <Link>Sell on Amazon</Link><br />
                        <Link>Sell under Amazon Accelerator</Link><br />
                        <Link>Protect and Build Your Brand</Link><br />
                        <Link>Amazon Global Selling</Link><br />
                        <Link>Become an Affiliate</Link><br />
                        <Link>Fulfilment by Amazon</Link><br />
                        <Link>Advertise Your Products</Link><br />
                        <Link>Amazon Pay on Merchants</Link>
                    </div>
                    <div className="">
                        <h5>Let Us Help You</h5>
                        <Link>COVID-19 and Amazon</Link><br />
                        <Link>Your Account</Link><br />
                        <Link>Returns Centre</Link><br />
                        <Link>100% Purchase Protection</Link><br />
                        <Link>Amazon App Download</Link><br />
                        <Link>Amazon Assistant Download</Link><br />
                        <Link>Help</Link>
                    </div>
                </div>
                <div className="mt-5">
                    <hr />
                </div>
                <div className="mt-5 text-center">
                    <div className="d-flex justify-content-center">
                        <img src={logo} className="img-fluid" style={{width:"80px"}} alt="" />
                    </div>
                </div>
                <div className="amazon-countries mt-3 mx-auto text-center">
                    <Link to="" className="px-1">Australia</Link>
                    <Link to="" className="px-1">Brazil</Link>
                    <Link to="" className="px-1">Canada</Link>
                    <Link to="" className="px-1">China</Link>
                    <Link to="" className="px-1">France</Link>
                    <Link to="" className="px-1">Germany</Link>
                    <Link to="" className="px-1">Italy</Link>
                    <Link to="" className="px-1">Japan</Link>
                    <Link to="" className="px-1">Mexico</Link>
                    <Link to="" className="px-1">Netherland</Link>
                    <Link to="" className="px-1">Poland</Link>
                    <Link to="" className="px-1">Singapore</Link>
                    <Link to="" className="px-1">Spain</Link>
                    <Link to="" className="px-1">Turkey</Link>
                    <Link to="" className="px-1">United Arab Emirates</Link>
                    <Link to="" className="px-1">United Kingdom</Link>
                    <Link to="" className="px-1">United States</Link>
                </div>
            </div>
        </>
    )
}
