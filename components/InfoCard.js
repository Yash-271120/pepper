import CheckBox from "./CheckBox";
import Image from "next/image";
import yourTasks from "../public/yourTask.png";
import teamProjects from "../public/teamProjects.png";
import totalMembers from "../public/totalMembers.png";



const InfoCard = ({type,title,reverse,succes})=>{
  return (
    <div className={`${reverse?"md:flex md:flex-row-reverse":"md:flex"} justify-between my-12 mx-12 items-center`}>
            <div className='max-w-md mx-h-md'>
                {type==="yourTasks" && <Image src={yourTasks} objectFit="cover"/>}
                {type==="teamProjects" && <Image src={teamProjects} objectFit="cover"/>}
                {type==="totalMembers" && <Image src={totalMembers} objectFit="cover"/>}
                </div>
            <div className=" text-left mt-6 md:mt-0">
              <h1 className='text-5xl max-w-xl m-auto font-semibold'>{title}</h1>
              <p className='mt-4 max-w-lg text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className='mt-8'>
              <CheckBox data="Create posts, reels and stories" succes={succes} col/>
              <CheckBox data="Publish your Facebook posts dynamically" succes={succes} col/>
              <CheckBox data="Schedule any Twitter posts" succes={succes} col/></div>
              
            </div>
          </div>
  )
}

export default InfoCard;
