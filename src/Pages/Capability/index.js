import React from "react";
import style from "./Capability.module.css";
import Card from "../../Components/Card";
import HtmlLogo from "../../images/htmlLogo.png"
import CssLogo from "../../images/cssLog.png"
import BootstrapLogo from "../../images/bootsrapLogo.jpeg"
import javaScriptLogo from "../../images/javaScriptLogo.png"
import ReactjsLogo from "../../images/ReactjsLogo.png"
import NodeLogo from "../../images/nodeLogo.png"










const Capability = () => {
  let DetailsArray = [
    {
      name: "HTML Development",
      imgeIcon: HtmlLogo,
      description: "Demanding Features of HTML and HTML5"

    },
    {
      name: "CSS",
      imgeIcon: CssLogo,
      description: "Demanding Features of CSS and CSS3"

    },
    {
      name: "BootStrap",
      imgeIcon: BootstrapLogo,
      description: "Demanding Features of Bootstrap"


    }, {
      name: "JavaScript",
      imgeIcon: javaScriptLogo,
      description: "Demanding Features of JavaScript"


    },
    {
      name: "React js",
      imgeIcon: ReactjsLogo,
      description: "Demanding Features of React js"


    },
    // {
    //   name: "Node js",
    //   imgeIcon: NodeLogo,
    //   description:"Demanding Features of Node js"


    // }



  ]
  return (
    <section className={style.capability}>
      <div className="container">
        <div className={style.capability_txt}>
          <h1>My Capabilities</h1>
          <div className={style.capability_line}></div>
          <p>
            UI Components Designing & Application Interface Coding
          </p>
        </div>
        <div className={style.capability_card}>
          {
            DetailsArray?.map((items, index) =>
              <Card items={items} key={index} />

            )

          }


        </div>
      </div>
    </section>
  );
};

export default Capability;
