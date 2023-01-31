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

const Starsvgicon = ()=>{
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F4A340" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
        </>
    )
}

export const SponsoredProductsCard = ({img})=>{
    return(
        <>
            <div className="amz-sponsor-product d-flex pb-3">
                <div className="">
                    <img src={img} className="img-fluid" alt="" style={{width:"100px"}} />
                </div>
                <div className="amz-sponsor-product-details px-3">
                    <Link to="" className="amz-link">Proathlix Protein Bar...</Link>
                    <br />
                    <Starsvgicon /><Starsvgicon /><Starsvgicon /><Starsvgicon /><Starsvgicon />
                    <br />
                    <span className="normal-text amz-fs-13 text-danger">$10.00</span>
                    <br />
                    <button className="amz-btn btn-sm medium-text amz-fs-11 amz-btn-primary shadow-sm py-2" style={{backgroundColor:"#F7CA47",border:"none",borderRadius:"10px"}}>Proceed to Buy</button>
                </div>
            </div>
        </>
    )
}
