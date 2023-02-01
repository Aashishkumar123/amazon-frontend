import logo from "../../static/images/amazon-logo.png";
import { Link } from "react-router-dom";
import "./checkout.css";
import { AddressSection } from "../../components/checkout/Address";
import { OrdersSummary } from "../../components/checkout/OrderSummary";
import { PaymentCard } from "../../components/checkout/Payment";
import { ItemsSection } from "../../components/checkout/Items";


export const Checkout = ()=>{
    document.body.style.background = "#ffff";
    return(
        <>
            <div className="amz-checkout-nav d-flex justify-content-around pt-4">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src={logo} alt="amazon-logo" className="img-fluid" />
                    <span className="dot-in normal-text">.in</span>
                </Link>
                <h3 className="medium-text">Checkout</h3>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="30" width="30"><g><rect x="2" y="5.5" width="10" height="8" rx="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M10.5,5.5V4a3.5,3.5,0,0,0-7,0V5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="7" cy="9.5" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg></span>
            </div>
            <div className="amz-checkout mx-auto">
                <div className="row">
                    <div className="col-sm-9">
                        <AddressSection />
                        <PaymentCard />
                        {/* <ItemsSection /> */}
                        <div className="amz-checkout-footer my-5">
                            <p className="amz-fs-11 text-muted normal-text">Need help? Check our help pages or contact us</p>
                            <p className="amz-fs-11 text-muted normal-text">When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card or net banking), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
                            <p className="amz-fs-11 text-muted normal-text">See Amazon.in's Return Policy.</p>
                            <p className="amz-fs-11 text-muted normal-text">Need to add more items to your order? Continue shopping on the Amazon.in homepage.</p>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <OrdersSummary />
                    </div>
                </div>
            </div>
        </>
    )
}
