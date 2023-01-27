import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import banner from "../static/images/71kv6y8hsyL._SX3000_.jpg";
import { ProductCard } from "../components/home/ProductCard";
import "../components/home/home.css";
import img1 from "../static/images/Mixer-186x116._SY116_CB614658577_.jpg";
import img2 from "../static/images/Comforter-186x116._SY116_CB614658577_.jpg";
import img3 from "../static/images/Photoframe-186x116._SY116_CB614658577_.jpg";
import img4 from "../static/images/Conatiner-186x116._SY116_CB614658577_.jpg";
import img5 from "../static/images/WF1-186-116._SY116_CB636048992_.jpg";
import img6 from "../static/images/WF2-186-116._SY116_CB636048992_.jpg";
import img7 from "../static/images/WF3-186-116._SY116_CB636048992_.jpg";
import img8 from "../static/images/WF4-186-116._SY116_CB636048992_.jpg";
import img9 from "../static/images/372x232_1_Low._SY116_CB670263840_.jpg";
import img10 from "../static/images/372x232_2_Low._SY116_CB670263840_.jpg";
import img11 from "../static/images/372x232_3_Low._SY116_CB670263840_.jpg";
import img12 from "../static/images/372x232_4_Low._SY116_CB670263840_.jpg";


export const Home = ()=>{
    document.body.style.backgroundColor = "#E3E6E6";
    return(
        <>
            <Navbar />
            <section className="amazon-banner" style={{height:"230px"}}>
                <img src={banner} alt="amz-banner-img" className="img-fluid" />
            </section>
            <main className="container-fluid product-card-main">
                <div className="row">
                    <ProductCard card_title='Upgrade your home | Amazon Brands & more' p_img1={img1} p_img2={img2} p_img3={img3} p_img4={img4} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Up to 70% off + Extra 10% cashback' p_img1={img5} p_img2={img6} p_img3={img7} p_img4={img8} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Revamp your home in style | 10% cashback' p_img1={img9} p_img2={img10} p_img3={img11} p_img4={img12} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Upgrade your home | Amazon Brands & more' p_img1={img1} p_img2={img2} p_img3={img3} p_img4={img4} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Up to 70% off + Extra 10% cashback' p_img1={img5} p_img2={img6} p_img3={img7} p_img4={img8} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Upgrade your home | Amazon Brands & more' p_img1={img1} p_img2={img2} p_img3={img3} p_img4={img4} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Revamp your home in style | 10% cashback' p_img1={img9} p_img2={img10} p_img3={img11} p_img4={img12} p1_title='upto 50% | Home applances' />
                    <ProductCard card_title='Upgrade your home | Amazon Brands & more' p_img1={img1} p_img2={img2} p_img3={img3} p_img4={img4} p1_title='upto 50% | Home applances' />
                </div>
            </main>
            <Footer />
        </>
    )
}
