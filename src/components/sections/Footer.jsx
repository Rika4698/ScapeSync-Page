import footerBg from '../../assets/images/footer/footer-bg.png';
import Navbar from '../shared/Navbar';
import footerLogo from '../../assets/images/footer/footer-logo.png';
import appStore from '../../assets/images/footer/footer-app.png';
import playStore from '../../assets/images/footer/footer-play.png';
import icon1 from '../../assets/images/icons/icon1.png';
import icon2 from '../../assets/images/icons/icon2.png';
import icon3 from '../../assets/images/icons/icon3.png';
import icon4 from '../../assets/images/icons/icon4.png';

const Footer = () => {
    return (
         <div className="bg-[#0F3B34]">
      <div
        className="bg-cover bg-center"
        style={{backgroundImage: `url(${footerBg})`}}>
        <Navbar>
          <div className="pt-12 lg:pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center  gap-6 lg:gap-0  lg:justify-between mb-12 lg:mb-24 ">
              <img
                src={footerLogo}
                alt="logo"
                className="bg-cover w-[200px] h-[76px] "
              />

              <div className=''>
                <p className="text-base font-medium text-start text-[#CFD8D6] h-[70px]">
                  Your all-in-one platform for job scheduling, employee
                  management, and client service built to keep your business
                  running smoothly from anywhere.
                </p>
              </div>

              <div className="flex gap-[18px] justify-start lg:justify-end">
                <img src={appStore}  alt="appStore" className='h-[50px] w-[140px]' />

                <img
                  src={playStore}
                  alt="playStore" className='h-[50px] w-[140px]'
                />
              </div>
            </div>

            <div className="flex gap-8 mb-8 lg:mb-14">
              <img
                src={icon4}
                alt="social icon"
                className="bg-cover h-[24px] w-[24px]"
              />
              <img
                src={icon3}
                alt="social icon"
                className="bg-cover h-[24px] w-[24px]"
              />
              <img
                src={icon2}
                alt="social icon"
                className="bg-cover h-[24px] w-[24px]"
              />
              <img
                src={icon1}
                alt="social icon"
                className="bg-cover h-[24px] w-[24px]"
              />
            </div>
          </div>
        </Navbar>

        <div className="border-t-[1px] border-[#637381] h-[21px]">
          <Navbar>
            <p className="text-sm font-normal text-[#637381]">
              © 2021-2025, ScapeSync. All Rights Reserved.
            </p>
          </Navbar>
        </div>
      </div>
    </div>
    );
};

export default Footer;