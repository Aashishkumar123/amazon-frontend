import { Navbar } from "../components/navbar/Navbar"
import { Footer } from "../components/footer/Footer"
import banner from "../static/images/71kv6y8hsyL._SX3000_.jpg"


export const Home = ()=>{
    return(
        <>
            <Navbar />
            <section className="amazon-banner">
                <img src={banner} alt="amz-banner-img" className="img-fluid" />
            </section>
            <Footer />
        </>
    )
}
