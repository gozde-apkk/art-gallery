




import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='text-white w-full h-full '>
  <footer className="footer h-[400px] flex flex-row justify-around items-center p-10 bg-base-200 ">
  <nav >
    <header className="text-2xl mb-5 w-10">Services</header> 
    <div className='flex flex-col'>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
    </div>
  </nav> 
  <nav>
    <header className="text-2xl mb-5 w-10">Company</header> 
    <div className='flex flex-col'>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
    </div>
  </nav> 
  <nav>
    <header className="text-2xl mb-5 w-10">Legal</header> 
     <div className='flex flex-col'>
     <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
     </div>
  </nav> 
  <form>
    <header className="text-2xl mb-5 w-10">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  )
}

export default Footer
