import './sheets/Home.css';
import Navbar from './common/Navbar'
import TypeIt from "typeit-react";
import Footer from './common/Footer';

function Home() {
  document.body.style.overflow = "hidden";

  return (
    <>
      <Navbar
        selected={'home'}
      />
      <div className="card-container">
        <div className="animate__backInUp">
          <div className="card">
            <h1 className="myname"><TypeIt
              getBeforeInit={(instance) => {
                instance.pause(700).type("Zaiin").pause(500).delete(2).pause(400).type("n").pause(200).type(" Moustafa");
                return instance;
              }}
            /></h1>
            <p className="mytitle">Computer Science Student at the University of Toronto</p>
            <p className="mytitle">Full Stack SWE | ML Engineer | Game Developer</p>
            {/* <p className="myshortbio">I'm passionate about creating accessible and impactful experiences.</p> */}

          </div>
        </div>
      </div>

      {/* <div className="animate__backInUp contact">
        <button className='imagebutton' onClick={open_gh}>
          <img src="github-mark.svg" alt="Github Link" />
          <p>Github</p>
        </button>
        <button className='imagebutton' onClick={open_gh}>
          <img src="github-mark.svg" alt="Github Link" />
          <p>Github</p>
        </button>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
