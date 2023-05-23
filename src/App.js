import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import Load from "./pages/Load";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Designer from "./pages/Designer";
import Developer from "./pages/Developer";
import Photographer from "./pages/Photographer";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Fashion from "./photographer/Fashion";
import Landscape from "./photographer/Landscape";
import Art from "./designer/Art";
import Header from "./designer/Header";
import Logo from "./designer/Logo";
import Misc from "./designer/Misc";
import Motion from "./designer/Motion";
import Package from "./designer/Package";
import Web from "./designer/Web";
import Intro from "./designer/Intro";
import Journalistic from "./photographer/Journalistic";


function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={13}
        outerSize={13}
        color='102, 0, 0'
        outerAlpha={0.4}
        innerScale={1.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Load />} />

          <Route path="/home" element={<Home />} />

          <Route path="/model" element={<Model />} />

          <Route path="/designer" element={<Designer />} />
          <Route path="/designer/header" element={<Header />} />
          <Route path="/designer/logo" element={<Logo />} />
          <Route path="/designer/web" element={<Web />} />
          <Route path="/designer/motion" element={<Motion />} />
          <Route path="/designer/art" element={<Art />} />
          <Route path="/designer/package" element={<Package />} />
          <Route path="/designer/misc" element={<Misc />} />
          <Route path="/designer/intro" element={<Intro />} />

          <Route path="/developer" element={<Developer />} />

          <Route path="/photographer" element={<Photographer />} />
          <Route path="/photographer/fashion" element={<Fashion />} />
          <Route path="/photographer/landscape" element={<Landscape />} />
          <Route path="/photographer/journalistic" element={<Journalistic />} />

          <Route path='/contact' element={<Contact />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
