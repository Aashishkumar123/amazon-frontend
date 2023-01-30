import { Link } from "react-router-dom";
import logo from "../../static/images/amazon-logo.png";


export const AddressCards = (props)=>{
    return(
        <>
            <div className="col-sm-4 amz-address-cards mb-3 d-flex align-items-stretch">
                <div className="amz-card-body p-3 card-body border rounded">
                    {(
                        ()=>{
                            if(props.default){
                                return(
                                    <>
                                    <div className="amz-card-header rounded py-2 px-3 border mb-3">
                                        <span className="text-muted">
                                            Default:
                                            <img src={logo} className="img-fluid" alt="logo" />
                                        </span>
                                    </div>
                                    </>
                                )
                            }
                        }
                    )()}
                    <h6>Aashish Kumar</h6>
                    <span>132, L Street,</span><br />
                    <span>Kingston</span><br />
                    <span>New York 12401</span><br />
                    <span>USA</span><br />
                    <span> Phone number: +17378383838</span><br />
                    <Link to="">Add delivery instructions</Link>
                    <div className="mt-4">
                        <Link to="">Edit</Link>
                        <span className="px-2"> | </span>
                        <Link to="">Remove</Link>
                        <span className="px-2"> | </span>
                        <Link to="">Set as Default</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
