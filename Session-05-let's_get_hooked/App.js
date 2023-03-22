// # Chapter 05 - let's get hooked

import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "../components/Header";
//named import
// import {Title} from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/








// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

//putting container into the root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
