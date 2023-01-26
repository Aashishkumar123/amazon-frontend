import { Logo } from "./Logo";
import { DeliverTO } from "./Deliver_to";
import { SearchTab } from "./SearchTab";
import { LanguageTab } from "./LanguageTab";
import { AccountList } from "./AccountList";
import { ReturnsOrders } from "./ReturnsOrders";
import { Cart } from "./Cart";
import { CategorySection } from "./CategorySection";
import "./navbar.css";


export const Navbar = ()=>{
    return(
        <>
            <nav className="container-fluid amazon-nav py-2 px-3">
                <div className="d-flex align-items-center justify-content-between">
                    <Logo />
                    <DeliverTO />
                    <SearchTab />
                    <LanguageTab />
                    <AccountList />
                    <ReturnsOrders />
                    <Cart />
                </div>
            </nav>
            <main className="amazon-category-section container-fluid py-2 text-white"><CategorySection /></main>
        </>
    )
}
