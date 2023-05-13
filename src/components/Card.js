import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

let a = false;
const Card = ({ item }) => {
  AOS.init();
  const [windowSize, setWindowSize] = useState(getWindowSize());
 
  //finding out the current screen width
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  
  if (windowSize.innerWidth > 768) {
    a = true;
  } else {
    a = false;
  }
  return (
    <div className="row" data-aos="fade-up">
      {a && (
        <>
          <div className="textColumn">
            <div
              className={a ? "servicesDescription" : "servicesDescription-b"}>
              <div className={a ? "servicesH2" : "servicesH2-b"}>
                <h2>{item.title}</h2>
              </div>
              <div className="servicesH3">
                <h3>{item.paragraph}</h3>
              </div>
              <div className="servicesP">
                <a href="/services/AIandRPAautomation">
                  <p>AI + RPA Automation</p>
                  <img
                    src="https://www.xivtech.io./Arrow-black.svg"
                    alt="arrow-black"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="imgColumn">
            <img
              className="serviceImage"
              src={item.image}
              alt="servicesimage"
            />
          </div>
        </>
      )}
      
      {!a && ( // if screen width is less than 768px, we return the below JSX code
        <>
          <div className="servicesDescription-b">
            <div className="servicesH2-b">
              <h2>{item.title}</h2>
            </div>
            <div className="servicesImageDiv">
              <img
                src={item.image}
                alt="arrow-black"
              />
            </div>
            <div className="servicesH3-b">
            <h3>{item.paragraph}</h3>
            </div>
            <div className="servicesP-b">
            <a href="/services/AIandRPAautomation">
                  <p>AI + RPA Automation</p>
                  <img
                    src="https://www.xivtech.io./Arrow-black.svg"
                    alt="arrow-black"
                  />
                </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

//function to get the current window size
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
