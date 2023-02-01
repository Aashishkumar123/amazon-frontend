import { Link } from "react-router-dom"


export const PaymentCard = ()=>{
    return(
        <>
            <div className="amz-payment-card py-3 border-bottom">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h4 className="bold-text px-3">2</h4>
                        <h4 className="bold-text px-3">Select a payment method</h4>
                    </div>
                    <Link to="" className="amz-link">Close</Link>
               </div>
               <div className="px-5 py-3 border mx-5 mt-3 rounded">
                    <div className="d-flex">
                        <div className="">
                            <input type="radio" />
                        </div>
                        <div className="px-3">
                            <h6 className="bold-text">Cash On Delivery/Pay On Delivery</h6>
                            <span className="normal-text amz-fs-13">Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.Know more.</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <input type="radio" />
                        <h6 className="bold-text px-3 mt-2">EMI</h6>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <input type="radio" />
                        <h6 className="bold-text px-3 mt-2">Other UPI Apps</h6>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <input type="radio" />
                        <h6 className="bold-text px-3 mt-2">Net Banking</h6>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <input type="radio" />
                        <div className="px-3">
                            <h6 className="bold-text mt-2">Pay with Debit/Credit/ATM Cards</h6>
                            <span className="normal-text amz-fs-12">You can save your cards as per new RBI guidelines.Learn More</span>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}
