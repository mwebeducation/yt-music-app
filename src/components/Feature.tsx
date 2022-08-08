import {FC, useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {motion} from 'framer-motion';

type Props = {
  icon: string;
  title: string;
  styles?: string;
}

const Feature: FC<Props> = ({icon, title, styles}: Props) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const variants = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      transform: 'scale(0.5)'
    }
  }

  return  <VisibilitySensor onChange={(isVisible: boolean) => setElementIsVisible(isVisible)} minTopValue={300}>
    <div className={"feature  flex items-center justify-center flex-col relative text-center mx-12"}>
      {/* icon*/}
      <motion.div
        variants={variants}
        animate={`${elementIsVisible}`}
        transition={{
          duration: 1.2,
          type: "ease-out"
        }}
        className={"icon bg-[#081730] rounded-2xl p-4"}>
        <img
          src={icon} alt={icon} className={`w-[3rem] ${styles}`}/>
      </motion.div>
      <span className={"mt-5"}> {title}</span>
      <span className={"text-[#707070] mt-4"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam blanditiis consectetur deserunt.
      </span>
      <span className={"text-[#E600FF] underline mt-[2rem] hover:cursor-pointer"}>Learn more</span>
    </div>
  </VisibilitySensor>
}

export default Feature;