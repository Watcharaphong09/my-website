import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { Dna } from  'react-loader-spinner'

const App = () => {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <>
      {
        Loading ?
          <div className="bg-slate-900 h-screen flex justify-center items-center">
            <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          </div>
          :

          <div className="bg-slate-900">
            <Nav />
            <Banner />
            <Skills />
            <Projects />
            <Footer />
          </div>
      }
    </>
  );
};

export default App;
