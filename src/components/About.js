import React from "react";
import "../style/home.css";

export default function About() {
  const mystyle={
    marginLeft: "60px",
  }
  return (
    <div className="home">
      <div className="a_top">
        <div>
          <span className="circle"></span>
          <span className="triangle"></span>
          <span className="square"></span>
          <span className="square2"></span>
          <h1 className="h_h1">Hey Its Payushi</h1>
          <a
            href="./about/Resumepayushi.pdf"
            target={"_blank"}
            className="a_btn"
          >
            RESUME <span className="span">→</span>
          </a>
        </div>
        <p style={mystyle}>
        
        </p>
        <p style={mystyle}>
        <p style={mystyle}>
        Born in bijnor U.P. Now living in bhiwadi where I had all my schooling.I was good in studies so schooling was not that hard.I belong to a fairly simple family.Growing up I was intrigued by different things other than studies.I took dancing and singing became a state champion in that field. Then I got into programming and I quickly understood that I want to do this so I am learning to be good at it now.My other hobbies include travelling and influencing.Thanks for visiting 🙂
        
        </p>
        
        </p>
      </div>

    </div>
  );
}
