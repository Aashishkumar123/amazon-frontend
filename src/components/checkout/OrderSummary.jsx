import { Link } from "react-router-dom";


export const OrdersSummary = ()=>{
    return(
        <>
            <div className="amz-checkout-summary border px-3 pb-3 rounded">
                <div className="d-grid mt-3 text-center">
                    <Link to="/gp/checkout" className="amz-btn amz-link medium-text amz-fs-13 amz-btn-primary shadow-sm py-2" style={{backgroundColor:"#F7CA47",border:"none",borderRadius:"10px"}}>Proceed to Buy</Link>
                </div>
                <div className="text-center px-3 pt-2 border-bottom">
                    <p className="amz-fs-12 normal-text">Continue to step 3 to finish checking out. You'll have a chance to review your order before it's final.</p>
                </div>
                <div className="py-3">
                    <h5 className="bold-text">Order Summary</h5>
                    <div className="d-flex justify-content-between">
                        <span className="normal-text amz-fs-12">Items:</span>
                        <span className="normal-text amz-fs-12">$75.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="normal-text amz-fs-12">Delivery:</span>
                        <span className="normal-text amz-fs-12">$5.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="normal-text amz-fs-12">Total:</span>
                        <span className="normal-text amz-fs-12">$80.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="normal-text amz-fs-12">Promotion Applied:</span>
                        <span className="normal-text amz-fs-12">-$5.00</span>
                    </div>
                </div>
                <div className="border-bottom border-top p-2">
                    <div className="d-flex justify-content-between">
                        <h5 className="bold-text text-danger">Order Total:</h5>
                        <h5 className="bold-text text-danger">$75.00</h5>
                    </div>
                </div>
            </div>
            <div className="p-3 border rounded" style={{backgroundColor:"#F0F2F2"}}>
                <Link className="amz-link">How are delivery costs calculated?</Link>
            </div>
        </>
    )
}
