import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './w2.jpg'
import image2 from './w3.jpg'
import image3 from './w4.jpeg'
import image4 from './w41.jpeg'


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">

              <form class="box" action="index.html" method="post">
                <h1>Login</h1>
                <input type="text" name="" placeholder="Username"/>
                <input type="password" name="" placeholder="Password"/>
                <input type="submit" name="" value="Login"/>
              </form>

              
          </div>
        </div>
      </div>
      <div class="img">
      <AliceCarousel autoPlay autoPlayInterval="1500" animationType="fadeout" autoPlay="true" infinite="true" >
      <img src={image1} className="sliderimg" alt=""/>
       <img src={image2} className="sliderimg" alt=""/>
       <img src={image3} className="sliderimg" alt=""/>
       <img src={image4} className="sliderimg" alt=""/>
     </AliceCarousel>
     </div>
     <div class="news blue">
      <span>Latest News</span><span class="text1" ><marquee>Rajagiri School of Engineering and Technology (Autonomous) is an educational institution which is located in Kochi Ernakulam district in India</marquee></span>
     </div>
        <div class="callout">
        <div class="callout-header">announcement box</div>
        <div class="callout-container"><p>points.</p></div>
         
        </div>
  
             
               
              
     

     </div>
  );
}


export default Home;
