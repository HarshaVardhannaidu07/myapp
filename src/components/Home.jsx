import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
  <>
      <div className="home" id="home">
        <main>
            <h1>TechyReact</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, culpa.</p>

        </main>
    </div>
    <div className ="home2"> 
    <img src={vg} alt="Graphics" />
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem vero,
             dicta, qui at, sapiente a optio asperiores assumenda 
             facilis dolores ex nesciunt sit perferendis?
        </p>
    </div>
     </div>
     <div className='home3' id="about">
         <div>
            <h1>Who we are? </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolore veritatis aspernatur alias voluptatem impedit, cumque molestias, 
                reprehenderit placeat, perferendis ex fugit atque optio quia. Voluptatum ratione aut mollitia in asperiores, 
                sunt modi nemo ullam exercitationem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia expedita laboriosam voluptatibus vitae repellendus. 
                Molestiae sint harum dolorum quo</p>
         </div>
     </div>
     <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:"0.3"}}>
             <AiFillGoogleCircle/>
             <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
             <AiFillAmazonCircle/>
             <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.6s"}}>
             <AiFillYoutube/>
             <p>Youtube</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
             <AiFillInstagram/>
             <p>Instagram</p>
            </div>
          </article>
        </div>

     </div>
  </>
    
  )
}

export default Home