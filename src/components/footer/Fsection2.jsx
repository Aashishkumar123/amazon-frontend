import { Link } from "react-router-dom"


export const FootersectionTwo = ()=>{
    return(
        <>
            <div className="amazon-footer-section-two py-3">
                <div className="text-center">
                    <Link className="px-2">Conditions of Use & Sale</Link>
                    <Link className="px-2">Privacy Notice</Link>
                    <Link className="px-2">Interest-Based Ads</Link>
                    <br />
                    <small>© 1996-2023, Amazon.com, Inc. or its affiliates</small>
                </div>
            </div>
        </>
    )
}
