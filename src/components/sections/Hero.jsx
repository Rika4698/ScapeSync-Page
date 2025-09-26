import bgEllipse from "../../assets/images/hero/ellipse-hero.png";
import Navbar from "../shared/Navbar";
import logo from "../../assets/images/logo-scape.png";
import vectorKingImg from "../../assets/images/icons/vector2.png";
import frameImg from "../../assets/images/Vector 7621.png";
import playStore from "../../assets/images/hero/play-store.png";
import appStore from "../../assets/images/hero/app-store.png";
import bgMobileImage from "../../assets/images/service/service-image-bg.png"; 

import heroPhone from "../../assets/images/hero/hero-phone.png";

const Hero = () => {
    return (
         <div
      className="bg-cover bg-center "
      style={{backgroundImage: `url(${bgEllipse})`}}>
      <Navbar>
        <div>
          <div className="flex justify-between h-[100px] items-center ">
            <img
              src={logo}
              alt="logo"
              className="bg-cover h-[60px] w-[147px]"
            />

            <button className="bg-[#3BA334] rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 py-[10px] px-[26px] text-white text-base font-bold">
              Get Started
            </button>
          </div>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-between items-center ">
            <div className="max-w-2xl md:max-w-xl lg:max-w-[655px] relative mt-28 md:mt-16 lg:-mt-20 ">
              <img
                src={vectorKingImg}
                alt="hero phone logo"
                className=" w-[130px] h-[134px] bg-cover bg-center absolute -top-16 left-[130px] lg:left-[210px] animate-pulse"
              />
              <img
                src={frameImg}
                alt="hero phone logo"
                className="w-[240px] lg:w-[300px] xl:w-[350px] h-[14px] bg-cover bg-center absolute top-23 lg:top-28 xl:top-34 left-[130px] xl:left-[160px] -z-1 animate-pulse"
              />
              <h2 className="text-5xl text-center lg:text-start lg:text-6xl xl:text-7xl font-bold text-[#212B36] mb-4">
                All Your Jobs One Smart App
              </h2>
              <p className="text-center lg:text-start text-[#637381] pt-4">
                Built for business owners, employees, and clients streamline job
                scheduling, service tracking, and team management in one
                powerful app.
              </p>

              <div className="mt-12 lg:mt-16 flex justify-center lg:justify-start gap-[18px]">
                <img
                  src={playStore}
                  alt="playStore" className="h-[50px] w-[140px]"
                />

                <img src={appStore} className="h-[50] w-[140px]" alt="appStore" />
              </div>
            </div>

            <div
              className="bg-cover bg-center lg:order-2"
              style={{backgroundImage: `url(${bgMobileImage})`}}>
              <img
                src={heroPhone}
                alt="hero phone logo"
                className="h-[600px] w-[710px]   lg:h-[632px] lg:w-[742px] bg-cover bg-center lg:mb-0"
              />
            </div>
          </div>
        </div>
      </Navbar>
    </div>
    );
};

export default Hero;