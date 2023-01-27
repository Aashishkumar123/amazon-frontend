import logo from "../../static/images/amazon-logo.png";
import "./auth.css";
import { Link } from "react-router-dom";
import { AuthFooter } from "./AuthFooter";


export const Signin = ()=>{
    document.body.style.backgroundColor ="#ffff";
    return(
        <>
            <div className="shadow-sm pb-4 border-bottom">
                <div className="amazon-auth mx-auto mt-1">
                    <div className="text-center amazon-logo-auth">
                        <Link to="/" style={{textDecoration:"none"}}>
                            <img src={logo} alt="amazon-logo" className="img-fluid" />
                            <span className="dot-in">.in</span>
                        </Link>
                    </div>
                    <div className="auth-form border p-4">
                        <h3>Sign in</h3>
                        <form action="" className="mt-3">
                            <label htmlFor="email" className="amz-label">Email or mobile phone number</label>
                            <input type="email" id="email" className="amz-input" />
                            <div className="d-grid mt-3">
                                <button className="py-1 amazon-btn amz-btn-primary">Continue</button>
                            </div>
                        </form>
                        <div className="mt-3 t-c">
                            <span>
                                By continuing, you agree to Amazon's <Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice</Link>.
                            </span>
                        </div>
                        <div className="mt-3 amz-need-help">
                            <span>
                            <Link to="">Need help?</Link>
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 text-center amz-new-account">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="border-top" style={{width:"7rem"}}></div>
                            <span className="text-muted">New to Amazon?</span>
                            <div className="border-top" style={{width:"7rem"}}></div>
                        </div>
                        <div className="d-grid mt-2">
                                <Link to="/ap/register" className="py-1 amazon-btn amz-btn-secondary">Create your Amazon account</Link>
                            </div>
                    </div>
                </div>
            </div>
            <AuthFooter />
        </>
    )
}
