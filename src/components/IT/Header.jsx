import { useState } from 'react';
import Link from 'next/link';
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="style-2 overflow-hidden"  data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize">
              <div className="top_info">
                <h1 className="text-uppercase">Gravity Labs</h1>
                <p className="fw-light text-uppercase">
                  Empowering <strong className="fw-bold">Global Businesses</strong> with <br />  <strong className="fw-bold"> Delightful Products & Services</strong> 
                </p>
                <a href="https://wa.me/34600972912" target="_blank" rel="noreferrer" className="sm-butn btn border text-white radius-9 hover-lightBlue m-2 mt-50" style={{'backgroundColor': '#02b5ff'}}>
                <span>Let’s Chat</span>
              </a>
              </div>
              <div className="brands mt-100 mb-80">
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0">
                  <img src="/assets/img/about/about_logos/walmart.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
                  <img src="/assets/img/about/about_logos/redbull.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/assets/img/about/about_logos/zurich.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
                  <img src="/assets/img/about/about_logos/hdi.png" alt="" />
                </a>
                {/* <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
                  <img src="/assets/img/about/about_logos/5.png" alt="" />
                </a> */}
              </div>
              <div className="brands mb-80">
                <a className="logo wow fadeInUp" data-wow-delay="0">
                  <img src="/assets/img/about/about_logos/ethereum2.png" alt="" />
                </a>
                <a className="logo wow fadeInUp" data-wow-delay="0.2s">
                  <img src="/assets/img/about/about_logos/gcp.png" alt="" />
                </a>
                <a className="logo wow fadeInUp" data-wow-delay="0.2s">
                  <img src="/assets/img/about/about_logos/aws2.png" alt="" />
                </a>
                <a className="logo wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/assets/img/about/about_logos/openai.png" alt="" />
                </a>
                {/* <a className="logo wow fadeInUp" data-wow-delay="0.8s">
                  <img src="/assets/img/about/about_logos/5.png" alt="" />
                </a> */}
              </div>
              <h4>

                Software development Lab dedicated to <br /> designing, developing, launching, and scaling your projects. <br /> Solving any tech challenge your business may face.
                
              </h4>
              <p className="d-block mt-40">
                GravityLabs is the partner of choice for many of the world’s leading <br /> enterprises, SMEs and technology challengers. We help businesses elevate their value through <br /> custom software development, product design, QA and consultancy services.
              </p>
              <Link href="https://t6a69iguvx7.typeform.com/to/NG9Z9y9x">
                <a className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue" target="_blank" rel="noreferrer">
                  <span>Get in touch!</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/header_2.png" alt="" className="head_shape2 wave" />
    </header>
  )
}

export default Header