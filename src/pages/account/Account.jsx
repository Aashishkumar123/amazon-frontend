import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./account.css";
import { AccountHome } from "../../components/account/AccountHome";


export const Account = ()=>{
    document.body.style.backgroundColor = "#ffff";
    return(
        <>
            <Navbar />
            <div className="amz-account p-3 mx-auto">
                <h3>Your Account</h3>
                <AccountHome />
            </div>
            <Footer />
        </>
    )
}
