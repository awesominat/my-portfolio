import React from "react";
import '../sheets/Footer.css'

function Footer({selected}) {
    const my_github = "https://www.github.com/awesominat"
    const my_linkedin = "https://www.linkedin.com/in/zain-alaabedeen-moustafa-483325251/"
    const open_gh = (e) => {
      e.preventDefault();
      window.open(my_github, '_blank')
    }
    const open_li = (e) => {
        e.preventDefault();
        window.open(my_linkedin, '_blank')
    }
    const openEmailClient = () => {
        const subject = 'Your Portfolio';
        const body = 'Hello, I wanted to get in touch with you.';
      
        const mailtoLink = `mailto:zain.moustafa@mail.utoronto.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }

    return (
        <>
      <div className="animate__backInUp contact">
        <button className='imagebutton small' onClick={open_gh}>
          <img src="github-mark.svg" alt="Github Link" />
          <p>Github</p>
        </button>
        <button className='imagebutton' onClick={open_li}>
          <img src="linkedin-icon.svg" alt="LinkedIn Link" />
          <p>LinkedIn</p>
        </button>
        <button className='imagebutton' onClick={openEmailClient}>
          <img src="mail.svg" alt="Email Me!" />
          <p>Email</p>
        </button>
      </div>
        </>
    )
}

export default Footer;