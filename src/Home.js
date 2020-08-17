import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <img
        className="banner_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className='home_row'>
      <Product
        id="4"
        title="Samsung Galaxy A80"
        price={499}
        image="https://m.media-amazon.com/images/I/41OdRS3K+7L._AC_SR160,160_.jpg"
        rating={3}
      />
       <Product
        id="5"
        title="Macbook pro"
        price={1999}
        image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX466_.jpg"
        rating={4}
      />
       <Product
        id="5"
        title="ASUS Vivobook Pro"
        price={699}
        image="https://images-na.ssl-images-amazon.com/images/I/61Hsm%2BC3XfL._SY450_.jpg"
        rating={4}
      />
    
      
      </div>
      <div className='home_row'>
      <Product
        id="1"
        title="Mac OS Completely"
        price={11.95}
        image="http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg"
        rating={4}
      />
       <Product
        id="2"
        title="Iphone 11 Pro Max"
        price={999}
        image="https://m.media-amazon.com/images/G/31/img18/Wireless/AppleProjectEye/Compare/iPhone11Pro._CB450736427_.png"
        rating={5}
      />
    
      
      </div>
      <div className='home_row'>
      <Product
        id="3"
        title="ipad Pro(2020)"
        price={1299}
        image="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/A21TJRUUN4KGV/1240fc3ca274ae38dab020242db952f8.w1500.h1500._CR0%2C0%2C1500%2C1500_SX750_SY750_.jpg"
        rating={5}
      />
      
    
      
      </div>
    </div>
  );
}

export default Home;
