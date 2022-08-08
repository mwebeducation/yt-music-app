import {FC} from 'react';
import CenterMenu from "./CenterMenu";
import MuzicLogo from '../assets/MuzicLogo.png'

const Header: FC = () => {
  const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:bg-[#232A4E]'
  return (<div
    className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem] text-white">
    {/*logo*/}
    <img src={MuzicLogo} alt={"logo"} className={'logo w-[42px] h-[42px]'}/>
    {/*side menu*/}
    <CenterMenu/>
    {/*buttons*/}
    <div className={"buttons flex"}>
      <button className={`${buttonStyle} mr-[35px]`}> Sign up</button>
      <button className={`${buttonStyle} bg-[#232A4E]`}> Sign in</button>
    </div>
  </div>);
}

export default Header;