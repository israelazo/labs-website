import Link from 'next/link';
import Numbers from './Numbers';
import chooseUsData from '@data/IT/chooseus.json';

const ChooseUs = () => {
  return (
    <section className="choose-us style-2 border-top bg-darkBlue brd-light section-padding" data-scroll-index="3">
      <div className="container">
        <div className="section-head mb-30 text-center">
          <h2 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">Why Partner with Us?</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img pe-lg-5">
              <img src="/assets/img/choose_us/circles.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <p className="text-white text-uppercase mb-60">Your digital transformation ally, <br /> delivering value at every step</p>
              <ul>
                {
                  chooseUsData.map((item, index) => (
                    <li className={`d-flex ${index !== chooseUsData.length - 1 ? 'mb-30':''}`} key={index}>
                      <div className="icon me-4 flex-shrink-0">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="inf">
                        <h5 className="text-white text-capitalize mb-2">{ item.title }</h5>
                        <small className="text-white op-8">
                          { typeof item.desc === 'string' ? item.desc : (<>{ item.desc.desc1 } <br /> { item.desc.desc2 }</>) }
                        </small>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <Link href="https://t6a69iguvx7.typeform.com/to/NG9Z9y9x">
                <a className="btn sm-butn border text-white radius-9 mt-70 hover-darkBlue">
                  <span>Get in Touch!</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <Numbers /> */}
      </div>
    </section>
  )
}

export default ChooseUs