import { Navbar } from "../components/navbar/Navbar"
import banner from "../static/images/71kv6y8hsyL._SX3000_.jpg"


export const Home = ()=>{
    return(
        <>
            <Navbar />
            <section className="amazon-banner">
                <img src={banner} alt="amz-banner-img" className="img-fluid" />
            </section>
        </>
    )
}
