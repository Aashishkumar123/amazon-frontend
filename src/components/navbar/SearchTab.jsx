export const SearchTab = ()=>{
    return(
        <>
            <div className="amazon-search-tab">
                <div className="d-flex">
                    <select class="amazon-select-option px-3 py-2" title="Search in">
                        <option selected="selected" value="search-alias=aps">All Categories</option>
                        <option value="search-alias=alexa-skills">Alexa Skills</option>
                        <option value="search-alias=amazon-devices">Amazon Devices</option>
                        <option value="search-alias=fashion">Amazon Fashion</option>
                        <option value="search-alias=nowstore">Amazon Fresh</option>
                        <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
                        <option value="search-alias=appliances">Appliances</option>
                        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                        <option value="search-alias=baby">Baby</option>
                        <option value="search-alias=beauty">Beauty</option>
                        <option value="search-alias=stripbooks">Books</option>
                        <option value="search-alias=automotive">Car &amp; Motorbike</option>
                        <option value="search-alias=apparel">Clothing &amp; Accessories</option>
                        <option value="search-alias=collectibles">Collectibles</option>
                        <option value="search-alias=computers">Computers &amp; Accessories</option>
                        <option value="search-alias=todays-deals">Deals</option>
                        <option value="search-alias=electronics">Electronics</option>
                        <option value="search-alias=furniture">Furniture</option>
                        <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
                        <option value="search-alias=gift-cards">Gift Cards</option>
                        <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
                        <option value="search-alias=hpc">Health &amp; Personal Care</option>
                        <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                        <option value="search-alias=jewelry">Jewellery</option>
                        <option value="search-alias=digital-text">Kindle Store</option>
                        <option value="search-alias=luggage">Luggage &amp; Bags</option>
                        <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                        <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                        <option value="search-alias=popular">Music</option>
                        <option value="search-alias=mi">Musical Instruments</option>
                        <option value="search-alias=office-products">Office Products</option>
                        <option value="search-alias=pets">Pet Supplies</option>
                        <option value="search-alias=instant-video">Prime Video</option>
                        <option value="search-alias=speed-store">Same-Day Delivery</option>
                        <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                        <option value="search-alias=software">Software</option>
                        <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
                        <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
                        <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                        <option value="search-alias=toys">Toys &amp; Games</option>
                        <option value="search-alias=under-ten-dollars">Under ₹500</option>
                        <option value="search-alias=videogames">Video Games</option>
                        <option value="search-alias=watches">Watches</option>
                    </select>
                    <input type="search" className="amazon-search-input px-2" placeholder="Search Amazon.in" />
                    <button type="submit" className="px-3 amazon-search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="20" width="20"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                    </button>
                </div>
            </div>
        </>
    )
}
