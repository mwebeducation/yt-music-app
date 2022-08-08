import {FC} from 'react';
import AppStore from '../assets/App Store.png';
import GoogleStore from '../assets/Google Play.png';

const DownloadAds: FC = () => {
  const downloadImageStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className={'download mt-2'} >
      <div className={"download_images flex"}>
        <img className={`${downloadImageStyle} mr-[1.5rem]`} src={AppStore} alt="apple store"/>
        <img className={downloadImageStyle} src={GoogleStore} alt="google store"/>
      </div>
    </div>
  )
}

export default DownloadAds;