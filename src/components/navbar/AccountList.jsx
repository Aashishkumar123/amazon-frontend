import { Link } from "react-router-dom"


export const AccountList = ()=>{
    return(
        <>
            <div className="amazon-account-list text-white">
                <Link to="/ap/signin/">
                    <span>Hello, sign in</span>
                    <h5>Account & Lists</h5>
                </Link>
            </div>
        </>
    )
}
