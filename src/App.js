
import Navbar from "./components/navbar"
import Header from "./components/header"
import Section from "./components/section"
import Projects from "./components/projects"
import Footer from "./components/contacts"
// import Card from "./components/card"
import { projects } from "./data";



function App() {
  return (
   <>
    <Navbar/>
    <Header/>
    <Section/>
    <Projects data = {projects} />
    <Footer/>
</>
  );
}

export default App;
