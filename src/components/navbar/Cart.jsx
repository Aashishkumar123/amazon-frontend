import { Link } from "react-router-dom"


export const Cart = ()=>{
    return(
        <>
            <Link to="/gp/cart" style={{textDecoration:"none"}}>
                <div className="amazon-cart-tab text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="30" width="30"><g><path d="M1.82,7.5H10l1-5H1a.5.5,0,0,0-.49.59l.82,4A.49.49,0,0,0,1.82,7.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11,2.5,11.42.9a.5.5,0,0,1,.49-.4H13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10,7.5,9.58,9.6a.5.5,0,0,1-.49.4H3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="3.5" cy="13" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="8.5" cy="13" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg>
                    <span>Cart</span>
                </div>
            </Link>
        </>
    )
}
