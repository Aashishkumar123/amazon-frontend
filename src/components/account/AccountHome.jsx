import Box from "../../static/images/Box._CB485927553_.png";
import Lock from "../../static/images/sign-in-lock._CB485931504_.png"
import Prime from "../../static/images/rc_prime._CB485926807_.png";
import Location from "../../static/images/address-map-pin._CB485934183_.png"
import Payment from "../../static/images/Payments._CB485926359_.png";
import Amz_Payment from "../../static/images/amazon_pay._CB485946857_.png"
import Support from "../../static/images/contact_us._CB623781998_.png"
import { Link } from "react-router-dom";


export const AccountHome = ()=>{
    return(
        <>
            <div className="row">
                <AccountCards img={Box} title='Your Orders' desc='Track, return, or buy things again' link='' />
                <AccountCards img={Lock} title='Login & security' desc='Edit login, name and mobile number' link='' />
                <AccountCards img={Prime} title='Prime' desc='View benefits and payment settings' link='' />
                <AccountCards img={Location} title='Your Addresses' desc='Edit addresses for orders and gifts' link='/gp/account/address' />
                <AccountCards img={Payment} title='Payment options' desc='Edit or add payment methods' link='' />
                <AccountCards img={Amz_Payment} title='Amazon Pay balance' desc='Add money to your balance' link='' />
                <AccountCards img={Support} title='Contact Us' desc='' link='' />
            </div>
        </>
    )
}


const AccountCards = ({img,title,desc,link})=>{
    return(
        <>
            <Link to={link} className="col-sm-4 mb-4">
                <div className="amz-account-card border p-3">
                    <img src={img} alt="" className="img-fluid" />
                    <div className="mt-2">
                        <h5>{title}</h5>
                        <span className="text-muted">{desc}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}
