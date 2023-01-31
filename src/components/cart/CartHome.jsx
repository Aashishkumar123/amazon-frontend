import amz_fullfill from "../../static/images/fba-badge_18px._CB485936079_.png";
import { Link } from "react-router-dom";


export const CartProductsCards = ({img})=>{
    return(
        <>
            <div className="amz-cart-products mt-4 border-bottom mb-3 pb-3">
                <div className="d-flex justify-content-between">
                    <div className="amz-cart-product-details d-flex align-items-center">
                        <input type="checkbox" name="" id="" />
                        <img src={img} className="img-fluid" alt="" />
                        <div className="amz-cart-product-details-body">
                            <h5 className="normal-text">Asitis Nutrition ATOM Whey Protein 1kg with Digestive Enzymes | Double rich chocolate | 27g protein | 5.7g BCAA | Lab Tested</h5>
                            <span className="text-success amz-fs-11 normal-text">In stock</span>
                            <br />
                            <span className="text-muted amz-fs-11 normal-text">Eligible for FREE Shipping</span>
                            <br />
                            <img src={amz_fullfill} className="img-fluid" alt="amz-fullfill" />
                            <br />
                            <input type="checkbox" checked />
                            <label htmlFor="" className="amz-fs-11 normal-text px-2">This will be a gift Learn more</label>
                            <br />
                            <span className="amz-fs-11 normal-text"><b>Flavor</b>: Chocolate</span>
                            <br />
                            <span className="amz-fs-11 normal-text"><b>Size</b>: 1 kg (Pack of 1)</span>
                            <br />
                            <div className="d-flex align-items-center">
                                <select name="" id="" className="mt-3 p-2 shadow-sm">
                                    <option value="">Qty: 1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                </select>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="text-muted px-2"></div>
                                    <Link to="" className="amz-link">Delete</Link>
                                    <div className="text-muted px-2">|</div>
                                    <Link to="" className="amz-link">Save for later</Link>
                                    <div className="text-muted px-2">|</div>
                                    <Link to="" className="amz-link">See more like this</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="amz-cart-product-price">
                        <h5 className="bold-text">$15.00</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
