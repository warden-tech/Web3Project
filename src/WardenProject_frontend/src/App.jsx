import React from "react";
import Navbar from './Navbar/Navbar';
import Request from "./RequestDemo/Request";
import InnovationSection from "./inovationSection/InnovationSection"
import ElixirSection from "./ElixirSection/ElixirSection";
import Faq from "./Faq/Faq"
import TutorialCards from "./Tutorial/TutorialCards";
import BlogPosts from "./BlogPost/BlogPosts";
import CaseStudy from "./CaseStudy/CaseStudy";
import ContactSection from "./ContactSection/ContactSection";
import NewsletterForm from "./NewsletterForm/NewsletterForm";

function App() {
 

  return (
   <div>
    <Navbar/>
    <Request/>
    <InnovationSection/>
    <ElixirSection/>
    <Faq/>
    <TutorialCards/>
    <BlogPosts/>
    <CaseStudy/>
    <ContactSection/>
    <NewsletterForm/>

   </div>
  );
}

export default App;
