import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import "../account.css";
import { Link } from "react-router-dom";


export const Addaddress = ()=>{
    return(
        <>
            <Navbar />
            <div className="amz-address-form mx-auto mt-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item amz-breadcrumb"><Link to="/gp/account" className="amz-breadcrumb-link text-muted">Your Account</Link></li>
                        <li class="breadcrumb-item amz-breadcrumb"><Link to="/gp/account/address" className="amz-breadcrumb-link text-muted">Your Address</Link></li>
                        <li class="breadcrumb-item amz-breadcrumb-active amz-breadcrumb" aria-current="page">New Addresses</li>
                    </ol>
                </nav>
                <h4 className="bold-text">Add a new address</h4>
                <form action="" className="mt-3">
                   <div>
                        <label htmlFor="country" className="amz-label">Country/Region</label>
                        <select name="" id="country" className="p-2">
                            <option value="">India</option>
                        </select>
                   </div>
                    <div className="mt-3">
                        <label htmlFor="fullname" className="amz-label">Full name</label>
                        <input type="text" id="fullname" class="amz-input" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="mobile" className="amz-label">Mobile number</label>
                        <input type="number" id="mobile" class="amz-input" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="pincode" className="amz-label">Pincode</label>
                        <input type="text" id="pincode" class="amz-input" placeholder="6 digits PIN code" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="flat" className="amz-label">Flat, House no., Building, Company, Apartment</label>
                        <input type="text" id="flat" class="amz-input" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="street" className="amz-label">Area, Street, Sector, Village</label>
                        <input type="text" id="street" class="amz-input" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="landmark" className="amz-label">Landmark</label>
                        <input type="text" id="landmark" class="amz-input" placeholder="E.g. near apollo hospital" />
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="landmark" className="amz-label">Landmark</label>
                                <input type="text" id="landmark" class="amz-input" placeholder="E.g. near apollo hospital" />
                            </div>
                            <div className="col">
                                <label htmlFor="landmark" className="amz-label">State</label>
                                <select name="address-ui-widgets-enterAddressStateOrRegion" className="p-2" autocomplete="off"><option value="">Choose a state</option><option value="ANDAMAN &amp; NICOBAR ISLANDS">ANDAMAN &amp; NICOBAR ISLANDS</option><option value="ANDHRA PRADESH">ANDHRA PRADESH</option><option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option><option value="ASSAM">ASSAM</option><option value="BIHAR">BIHAR</option><option value="CHANDIGARH">CHANDIGARH</option><option value="CHHATTISGARH">CHHATTISGARH</option><option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">DADRA AND NAGAR HAVELI AND DAMAN AND DIU</option><option value="DELHI">DELHI</option><option value="GOA">GOA</option><option value="GUJARAT">GUJARAT</option><option value="HARYANA">HARYANA</option><option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option><option value="JAMMU &amp; KASHMIR">JAMMU &amp; KASHMIR</option><option value="JHARKHAND">JHARKHAND</option><option value="KARNATAKA">KARNATAKA</option><option value="KERALA">KERALA</option><option value="LADAKH">LADAKH</option><option value="LAKSHADWEEP">LAKSHADWEEP</option><option value="MADHYA PRADESH">MADHYA PRADESH</option><option value="MAHARASHTRA">MAHARASHTRA</option><option value="MANIPUR">MANIPUR</option><option value="MEGHALAYA">MEGHALAYA</option><option value="MIZORAM">MIZORAM</option><option value="NAGALAND">NAGALAND</option><option value="ODISHA">ODISHA</option><option value="PUDUCHERRY">PUDUCHERRY</option><option value="PUNJAB">PUNJAB</option><option value="RAJASTHAN">RAJASTHAN</option><option value="SIKKIM">SIKKIM</option><option value="TAMIL NADU">TAMIL NADU</option><option value="TELANGANA">TELANGANA</option><option value="TRIPURA">TRIPURA</option><option value="UTTAR PRADESH">UTTAR PRADESH</option><option value="UTTARAKHAND">UTTARAKHAND</option><option value="WEST BENGAL">WEST BENGAL</option></select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <input type="checkbox" id="default" />
                        <label htmlFor="default" className="amz-label px-2">Make this my default address</label>
                    </div>
                    <div className="mt-3">
                        <h5 className="medium-text">Add delivery instructions</h5>
                        <span style={{fontSize:"13px"}}>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</span>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="address_type" className="amz-label">Address Type</label>
                        <select name="" id="address_type" className="p-2">
                            <option value="">Select an Address Type</option>
                            <option value="">Home</option>
                            <option value="">Office</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <button className="amz-btn amz-btn-primary rounded btn shadow">Add Address</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
