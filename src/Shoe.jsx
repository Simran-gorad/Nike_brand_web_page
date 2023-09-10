import "./App.css"

function Shoe(params) {
    return(
        <main className="container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESRVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div>
                    <button className="shop-btn">
                        SHOP NOW
                    </button>
                    <button className="category-btn">
                        CATEGORY
                    </button>
                </div>

                <div className="shopping">
                    <p>Also availabale on</p>
                    </div>
                <div className="brand-icon">
                <img className="amazon" src='./src/assets/amazon.png' alt="amazon"/>
                    <img className="flipkart" src='./src/assets/flipkart.png' alt="flipkart"/>
                </div>
            </div>
            
            <div className="image">
                <img src="./src/assets/shoe_image.png" alt="NIKESHOE"/>
            </div>
        </main>
    )
};

export default Shoe;