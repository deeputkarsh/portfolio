import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import getParallaxHOC from "@self/components/parellax";

function Parellex() {
  const target = useRef(null);
  const name = useParallax({
    speed: 200,
    targetElement: target?.current ?? undefined,
  })
  
  return (
    <div ref={target} style={{
      backgroundImage: "url('/workstation.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: '100vh'
    }} className="h-screen">
      {/* <div>
      Photo by <a href="https://unsplash.com/@daria_shevtsova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daria Shevtsova</a> on <a href="https://unsplash.com/photos/zbWFT4eVopE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div> */}
  
      <div ref={name.ref} className="absolute"
        style={{
          top: '11vh',
          width: '100%',
          margin: 'auto'
        }}
      >
        Hi, This is Utkarsh Deep
      </div>
    </div>
  );
}

export default getParallaxHOC(Parellex)