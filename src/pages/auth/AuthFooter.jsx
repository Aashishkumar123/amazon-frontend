import { Link } from "react-router-dom";


export const AuthFooter = ()=>{
    return(
        <>
            <div className="mt-4 text-center auth-footer">
                <div>
                    <Link to="">Conditions of Use</Link>
                    <Link to="" className="px-3">Privacy Notice</Link>
                    <Link to="">Help</Link>
                </div>
                <span className="mt-3 auth-footer-copyright text-muted">© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </>
    )
}
