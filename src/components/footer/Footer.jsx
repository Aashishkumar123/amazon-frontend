import { BacktoTop } from "./Backtotop";
import { FootersectionOne } from "./Fsection1";
import { FootersectionTwo } from "./Fsection2";
import "./footer.css";

export const Footer = ()=>{
    return(
        <>
            <footer className="amazon-footer text-white mt-5">
                <BacktoTop />
                <FootersectionOne />
                <FootersectionTwo />
            </footer>
        </>
    )
}
