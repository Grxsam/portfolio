import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { ReactTyped } from "react-typed"; // Named import

function Home() {
  const { name, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br />My Name is<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          I am a passionate <br></br>
          {" "}
          <ReactTyped // Using the named import ReactTyped
            strings={["Web Developer", "Music Marketeer","Social Media Manager"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
      </div>
      <div className="mt-5 md:mt-0 flex justify-center">
        <img style={{ width: 300 }} ref={myimageref} className="w-1/2 md:w-auto md:ml-auto" src={img} alt="Pavan MG" />
      </div>
    </main>
  );
}

export default Home;
