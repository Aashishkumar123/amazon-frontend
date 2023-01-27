export const ProductCard = (props)=>{
    return(
        <>
            <div className="col-sm-3 amazon-product-card mb-4">
                <div className="bg-white p-3">
                    <h5>{props.card_title}</h5>
                    <div className="row">
                        <Product image={props.p_img1} title={props.p1_title} />
                        <Product image={props.p_img2} title={props.p1_title} />
                        <Product image={props.p_img3} title={props.p1_title} />
                        <Product image={props.p_img4} title={props.p1_title} />
                    </div>
                </div>
            </div>
        </>
    )
}

const Product = ({image, title})=>{
    return(
        <>
            <div className="col-6 mb-2">
                <img src={image} className="img-fluid" alt="" />
                <br />
                <span style={{fontSize:"12px",lineHeight:"0px!important"}}>{title}</span> 
            </div>
        </>
    )
}
