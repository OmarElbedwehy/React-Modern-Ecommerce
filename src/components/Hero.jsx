import { useEffect, useState } from "react"
import heroImg from "../assets/hero.png"

const Hero = ()=>{
    const [addTransform, setAddTransform] = useState(false)

    useEffect(()=>{
        window.onload = ()=>{
            setAddTransform(true)
        }
        window.onscroll = ()=>{
            if (window.scrollY >= 800){
              setAddTransform(false)
            }else if(window.scrollY <= 300){
              setAddTransform(true)
            }
          }
    })

    return(
        <div className="hero_container">
            <div className="hero_side">
                <span>SKIN PROTECTION CREAM</span>
                <div className="hero_text">
                    <span>Trendy Collection</span>
                    <p>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</p>
                </div>
            </div>
            <div className="hero_wrapper">
                <span className={`blue_circle ${addTransform ? "transform" : ""}`}></span>
                <img src={heroImg} className={`${addTransform ? "transform" : ""}`} />
                <div className="hero_cart">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5zm5 10h-2v1a1 1 0 0 0 1.993.117L17 12v-1zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12v-1zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995L12 3z"></path></g></svg>
                    <div className="hero_signup">
                        <span>Best Signup Offers</span>
                        <div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_side">
                <div className="text">
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>
                <div className="text">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero