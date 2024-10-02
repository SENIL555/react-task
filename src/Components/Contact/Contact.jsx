import React from 'react'
import './Contact.css'
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6a2322e0-d4fa-4e72-a548-645d9bac1e6d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let,s talk</h1>
                <p>
                As a fresher in an IT company, you are typically a recent graduate or someone new to the industry. Your role may involve learning about various technologies, tools, and software used in the company. You'll be expected to assist in tasks such as coding, testing, debugging, or maintaining IT systems. Training programs are often provided to help you understand the company's processes and work culture.
                </p>
            <div className="contact-details">
             <div className="contact-detail">
              <img  height={50} width={50}  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3430687/mail-icon-sm.png" alt="" /><p>antonysenil@gmail.com</p>
             </div>
            </div>
            <div className="contact-details">
             <div className="contact-detail">
               <img  height={50} width={50}  src="https://static.vecteezy.com/system/resources/previews/015/720/174/original/eps10-white-phone-call-or-telephone-abstract-icon-isolated-on-black-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg" alt="" /><p>+918921361533</p> 
             </div>
            </div>
            <div className="contact-details">
             <div className="contact-detail">
               <img height={50} width={50} src="https://icon-library.com/images/address-icon-white/address-icon-white-18.jpg" alt="" /><p>Chiramal Pullukaran House, Bennet Road Po Ollukkara, Thrissur</p>
             </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter your name' name='name' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter your  email' name='email' />
            <label htmlFor="">writer your message here</label>
            <textarea name="message" rows="8" placeholder='enter your message'></textarea>
            <button className='contact-submit'>Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact
