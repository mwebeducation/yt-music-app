import {FC} from 'react';

type Props = {
  icon: string;
  title: string;
  styles?: string;
}

const Feature: FC<Props> = ({icon, title, styles}: Props) => {
  return <div className={"feature  flex items-center justify-center flex-col relative text-center mx-12"}>
    {/* icon*/}
    <div className={"icon bg-[#081730] rounded-2xl p-4"}>
    <img src={icon} alt={icon} className={`w-[3rem] ${styles}`}/>
    </div>
    <span className={"mt-5"}> {title}</span>
    <span className={"text-[#707070] mt-4"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam blanditiis consectetur deserunt.
    </span>
    <span className={"text-[#E600FF] underline mt-[2rem] hover:cursor-pointer"}>Learn more</span>
  </div>
}

export default Feature;