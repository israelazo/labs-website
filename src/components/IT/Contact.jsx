import Link from 'next/link';

const Contact = () => {
  return (
    <section className="contact style-2 bg-darkBlue pt-50">
      <div className="container">
        <div className="content text-center text-white">
          <p className="op-7 mb-70 text-uppercase">Let us be your partner on the path to success!</p>
          <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50">(+34) 600 972 912</h2>
          <h4 className="fw-normal mb-20 op-9">hello@gravitylabs.tech</h4>
          <h4 className="fw-normal mb-30 op-7">Worldwide remote services</h4>
          <div className="text-center">
            <Link href="https://wa.me/34600972912">
              <a className="sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2">
                <span>Let’s Chat</span>
              </a>
            </Link>
            <Link href="https://t6a69iguvx7.typeform.com/to/NG9Z9y9x">
              <a className="sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2">
                <span>Request Consultation</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <img src="/assets/img/global2.png" alt="" className="global_2" />
    </section>
  )
}

export default Contact