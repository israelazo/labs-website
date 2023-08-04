import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="foot_logo">
              <img src="/assets/img/logo_ll.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="foot_links text-uppercase text-center small">
              <Link href="/">
                <a className="mx-4">
                  Home
                </a>
              </Link>
              {/* <Link href="/page-about-5">
                <a className="mx-4">
                  about us
                </a>
              </Link> */}
              {/* <Link href="/page-services-5">
                <a className="mx-4">
                  services
                </a>
              </Link> */}
              <Link href="https://drive.google.com/file/d/1dU77wr4G2WonKUWkjsTlAUKf7YsKUpqy/view?usp=sharing">
                <a className="mx-4" target="_blank" rel="noreferrer">
                  product offering
                </a>
              </Link>
              <Link href="https://t6a69iguvx7.typeform.com/to/NG9Z9y9x">
                <a className="mx-4" target="_blank" rel="noreferrer">
                  get in touch!
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-end">
            <div className="socail-icons">
              {/* <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-github"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-center mt-30">
          <div className="small">
            <span className="op-6">© 2018 Copyrights by </span>
            <a href="#" className="mx-1">Gravity Labs</a>
            <span className="op-6"> All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer