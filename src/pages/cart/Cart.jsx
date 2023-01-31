import "./cart.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { CartProductsCards } from "../../components/cart/CartHome";
import productimage1 from "../../static/images/518YtltCzzL._AC_AA180_.jpg";
import productimage2 from "../../static/images/61+infHNFDL._AC_AA180_.jpg";
import productimage3 from "../../static/images/61h2xBJt6qL._AC_AA180_.jpg";
import productimage4 from "../../static/images/61jMf1cjadL._AC_AA180_.jpg";
import productimage5 from "../../static/images/61fPT0y6UkL._AC_AA180_.jpg";


export const Cart = ()=>{

    document.body.style.backgroundColor = "#E3E6E6";

    return(
        <>  
            <Navbar />
            <div className="amz-cart mt-4 mx-4">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="bg-white p-4 pb-5">
                            <div className="amz-cart-header">
                                <h3 className="medium-text">Shopping Cart</h3>
                                <Link to="" className="amz-link">Deselect all items</Link>
                                <div className="float-end">
                                    <span className="amz-fs-14">Price</span>
                                </div>
                                <div className="border-bottom"></div>
                            </div>
                            <CartProductsCards img={productimage1} />
                            <CartProductsCards img={productimage2} />
                            <CartProductsCards img={productimage3} />
                            <CartProductsCards img={productimage4} />
                            <CartProductsCards img={productimage5} />
                            <div className="amz-cart-total float-end">
                                <h6><span className="medium-text">Subtotal (5 items):</span> <span className="bold-text">$75.00</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="bg-white p-4">
                            <h6><span className="medium-text">Subtotal (5 items):</span> <span className="bold-text">$75.00</span></h6>
                            <input type="checkbox" checked />
                            <label htmlFor="" className="amz-fs-11 normal-text px-2">This will be a gift Learn more</label>
                            <div className="d-grid mt-3">
                                <button className="amz-btn medium-text amz-fs-13 amz-btn-primary shadow-sm py-2" style={{backgroundColor:"#F7CA47",border:"none",borderRadius:"10px"}}>Proceed to Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
