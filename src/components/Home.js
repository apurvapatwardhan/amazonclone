import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://www.sierradeals.com/wp-content/uploads/2020/02/Amazon-780x470.jpg"
        alt="prime"
        className="home__image"
      />
      <div className="home__products">
        <div className="home__products__row">
          <Product
            src="https://th.bing.com/th/id/OIP.VpeWzdP83dtuTdkxvgt3FAAAAA?w=182&h=273&c=7&r=0&o=5&pid=1.7"
            rating={3}
            price={11.69}
            title="The Lean Startup is a good book to start it up"
            id={1}
          />
          <Product
            src="https://th.bing.com/th/id/OIP.XpmRAIRWLlByG5GQfgAqzAHaGc?w=232&h=202&c=7&r=0&o=5&pid=1.7"
            rating={4}
            price={100.11}
            title="This sewing machine is very useful and comes at low cost"
            id={2}
          />
        </div>
        <div className="home__products__row">
          <Product
            src="https://www.bing.com/th?id=OIP.w4sxrwfWIbmsKhKSKy2pzAHaE5&w=150&h=99&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            rating={3}
            price={12.35}
            title="Smart watch makes you smart"
            id={3}
          />
          <Product
            src="https://th.bing.com/th/id/OIP.Syb9fuUtRhuTsz-_yQFR7gHaFV?w=268&h=193&c=7&r=0&o=5&pid=1.7"
            rating={2}
            price={18.96}
            title="Power bank will not let you entertainment stop ven when there is no charge"
            id={4}
          />
          <Product
            src="https://th.bing.com/th/id/OIP.EegPlOGslBugwnjJm0fmkQHaEV?w=274&h=180&c=7&r=0&o=5&pid=1.7"
            rating={4}
            price={50.43}
            title="This phone is the best in all go for it and add it in your cart"
            id={5}
          />
        </div>
        <div className="home__products__row">
          <Product
            src="https://th.bing.com/th/id/OIP.YtUHE-brnbMYJdiMwPTNigHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7"
            rating={5}
            price={10.12}
            title="T-shirt make man look attractive and presentable go for it"
            id={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
