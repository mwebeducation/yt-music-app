import {FC} from 'react';
import CenterMenu from "./CenterMenu";
import Facebook from '@mui/icons-material/Facebook';
// @ts-ignore
import Twitter from '@mui/icons-material/Twitter';
// @ts-ignore
import YouTube from '@mui/icons-material/YouTube';
// @ts-ignore
import LinkedIn from '@mui/icons-material/LinkedIn';

type Props = {};

const Footer: FC<Props> = () => {

  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[38rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>
        <div className={SocialStyle}>
          <Twitter />
        </div>
        <div className={SocialStyle}>
          <YouTube/>
        </div>
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}


export default Footer;