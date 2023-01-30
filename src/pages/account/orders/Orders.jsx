import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../../components/account/OrdersHome";


export const Orders = ()=>{
    return(
        <>
            <Navbar />
            <div className="amz-orders mt-3 mx-auto">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item amz-breadcrumb"><Link to="/gp/account" className="amz-breadcrumb-link text-muted">Your Account</Link></li>
                        <li class="breadcrumb-item amz-breadcrumb amz-breadcrumb-active" aria-current="page">Your Orders</li>
                    </ol>
                </nav>
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="h3">Your Orders</h3>
                    <div className="d-flex align-items-center">
                        <input type="search" className="amz-input" placeholder="Search all orders" />
                        <button className="amz-btn amz-btn-dark py-1 mx-2 px-4">Search</button>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <span className="medium-text px-2" style={{fontSize:"14px"}}><b>7 orders</b> placed in</span>
                    <select name="" className="p-2" id="">
                        <option value="">2023</option>
                        <option value="">2022</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                    </select>
                </div>
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
            </div>
            <Footer />
        </>
    )
}
