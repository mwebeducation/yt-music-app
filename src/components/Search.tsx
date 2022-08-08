import {FC} from 'react';
import BackGraphics from '../assets/backgraphics.png';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import search from '../assets/search.png';
import Path318 from "../assets/Path 318.png";
import MusicPlayer from "./MusicPlayer";

type Props = {};

const Search:FC<Props> = () => {
  return <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] z-[1] mt-[-15rem]
   flex items-center justify-between rounded-b-[5rem] w-[100%]">
    {/* left side */}
    <div className="left flex-1">
      <img src={BackGraphics} alt="back graphics image" className={"absolute top-[22rem] left-[-47rem]"}/>
      <img src={d1} alt="d1 image" className={"absolute w-[16rem] top-[26rem]"}/>
      <img src={d2} alt="d2 image" className={"absolute w-[9rem] top-[32.7rem] left-[7rem]"}/>
      <img src={d3} alt="d3 image" className={"absolute top-[32rem] left-[17rem] w-[9rem]"}/>
      <img src={d4} alt="d4 image" className={"absolute top-[50rem] left-[2rem] w-[17rem]"}/>
    </div>
    {/* right side */}
    <div className="right flex items-start flex-col justify-center flex-1 overflow-hidden z-[2] h-[100%] pt-[8rem]">
      <div className="searchbar flex justify-start w-[100%]">
        <input type="text" name="" id="" placeholder={"Enter the keyword or URL"}
               className={"flex-[19] outline-none bg-[#020917]  rounded-xl p-3 h-[3rem]"}/>
        <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF]
        p-4 h-[3rem]">
          <img src={search} alt="search icon" className={"w-[1.3rem]"}/>
        </div>
      </div>
      {/*tild icon*/}
      <div className="tild flex justify-start mt-7 items-center w-[100%]">
        <img src={Path318} alt={"path"} className={"w-[5rem]"}/>
      </div>
      {/* detail*/}
      <div className="detail flex flex-col mt-5 text-4xl">
        <span>Search Music By Name</span>
        <span>
          <b>Name or Direct URL</b>
        </span>
        <span className="text-sm mt-3 text-[#4D586A">
          Duis Feugiat congue metus, ultrices vulputate <br/> nibh viverra eget. Vestibulum ullamcorper <br/> volutpat varius.
        </span>
      </div>
      {/*music player*/}
      <MusicPlayer />
    </div>
  </div>;
}

export default Search;

