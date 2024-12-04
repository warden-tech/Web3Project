import React from "react";
import Navbar from './Navbar/Navbar';
import Request from "./RequestDemo/Request";
import InnovationSection from "./inovationSection/InnovationSection"
import ElixirSection from "./ElixirSection/ElixirSection";
import Faq from "./Faq/Faq"


function App() {
 

  return (
   <div>
    <Navbar/>
    <Request/>
    <InnovationSection/>
    <ElixirSection/>
    <Faq/>

   </div>
  );
}

export default App;
