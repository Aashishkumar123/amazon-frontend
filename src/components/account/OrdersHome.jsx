import { Link } from "react-router-dom"
import productimage1 from "../../static/images/41KUCZkvICL._SY90_.jpg"


export const OrdersCard = ()=>{
    return(
        <>
            <div className="amz-order-card border mt-3">
                <div className="amz-order-card-header py-3">
                    <div className="d-flex justify-content-between">
                        <div className="left-card-header-detail d-flex">
                            <div className="px-4">
                                <span>ORDER PLACED</span><br />
                                <span>21 August 2022</span>
                            </div>
                            <div className="px-4">
                                <span>TOTAL</span><br />
                                <span>$50.00</span>
                            </div>
                            <div className="px-4">
                                <span>SHIP TO</span><br />
                                <span>Aashish Kumar</span>
                            </div>
                        </div>
                        <div className="right-card-header-detail">
                            <div className="">
                                <span className="px-3">ORDER # 171-0804433-7393946</span><br />
                                <Link to="" className="amz-link">View order details</Link>
                                <Link to="" className="px-3 amz-link">Invoice</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amz-order-card-body p-3 border-top">
                    <h5 className="bold-text">Delivered 23-Aug-2022</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src={productimage1} className="img-fluid" alt="" />
                            </div>
                            <div className="px-3" style={{width:"500px"}}>
                                <Link to="" className="amz-link">
                                    Asitis Nutrition ATOM Whey Protein 1kg with Digestive Enzymes | Double rich chocolate | 27g protein | 5.7g BCAA | Lab Tested
                                </Link>
                                <br />
                                <span className="normal-text amz-fs-13">Return window closed on 02-Sep-2022</span>
                                <br />
                                <div className="mt-2">
                                    <button className="amz-btn amz-btn-primary px-2 py-1">Buy it again</button>
                                    <button className="amz-btn amz-btn-secondary px-2 mx-2 py-1">View your item</button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <button className="amz-btn amz-btn-secondary px-4 py-1 shadow-sm normal-text" style={{borderRadius:"10px",backgroundColor:"white"}}>Ask Product Questions</button>
                            </div>
                            <div className="mt-3">
                                <button className="amz-btn amz-btn-secondary px-4 py-1 shadow-sm normal-text" style={{borderRadius:"10px",backgroundColor:"white"}}>Write Product Review</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amz-order-card-footer p-3 border-top">
                    <Link to="" className="amz-link">Archive order</Link>
                </div>
            </div>
        </>
    )
}
