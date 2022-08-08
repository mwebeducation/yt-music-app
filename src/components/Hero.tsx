import {FC} from 'react';
import DownloadAds from "./DownloadAds";
import backGraphics from '../assets/backgraphics.png';
import p1 from '../assets/p 1.png';
import p2 from '../assets/p 2.png';
import p3 from '../assets/p 3.png';
import p4 from '../assets/p 4.png';

const HeroSection: FC = () => {
  return <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
    {/*lift side */}
    <div
      className="headings">
      <span>Experience The </span>
      <span><b>Best Quality Music</b></span>
      <span className="text-[15px] text-[#525D6E]">
        Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
        <br/>
        Suspendisse in leo non risus tincidunt lobortis.
      </span>
      <div>
        <span className={"text-[13px]}"}>Download now on IOS and Android</span>
        <DownloadAds/>
      </div>
    </div>
    {/*right side*/}
    <div className="images relative w-[50%] z-[4]">
      <img src={backGraphics} alt={"backGraphics"} className={"absolute top-[-8rem] left-[19rem]"} />
      <img src={p1} alt={"picture 1"} className={"absolute top-[-15rem] h-[34rem] left-[13rem]"} />
      <img src={p2} alt={"picture 2"} className={"absolute top-[94px] w-[175px] left-[235px]"} />
      <img src={p3} alt={"picture 3"}className={"absolute top-[12rem] w-[5rem] left-[13rem]"} />
      <img src={p4} alt={"picture 4"}className={"absolute top-[12rem] w-[5rem] left-[12.5rem]"} />
    </div>
  </div>;
};

export default HeroSection