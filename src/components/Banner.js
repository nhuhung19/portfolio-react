import React from "react";
import Typical from "react-typical";
import NavBarSection from "./NavBarSection";

export default function Banner() {
  return (
    // <div className="w-100 h-100">
    <div className="bg-img" id="home">
      <NavBarSection />
      <div className="intro w-100 h-100 ">
        <div className="w-100 h-100 d-flex flex-column  align-items-center justify-content-center">
          <h1 className="text-light display-2">Hi, I'm Ta Nhu Hung</h1>
          <h3 className="text-center ">
            <i className=" text-light far fa-share-square mr-2"></i> 
            
            <a href="https://drive.google.com/file/d/1F6kBiTKVkqazTXIHKjejtszRW3bHY04O/view?usp=sharing">
              <button type="button" className="btn btn-outline-light py-2 px-3">
                <span style={{fontSize: "20px"}}>My Resume </span>
              </button>
            </a>
          </h3>
          <h1 className="text-light ">
            <Typical
              steps={[
                "Welcome to my portfolio.",
                1000,
                "I am a Full Stack Web Developer.",
                1000,
                "Scrolldown to see more about me.",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
        </div>
      </div>
    </div>
    //  </div>
  );
}
