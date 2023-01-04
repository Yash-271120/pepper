import {MdOutlineEmail,MdOutlineCalendarToday,MdPersonOutline,MdOutlineCreditCard,MdOutlineApps,MdNotificationsNone,MdOutlineMessage} from 'react-icons/md'

const FeatureCard = ({title,type})=>{
    return(
        <div className='text-left p-5 max-w-md bg-white m-10 rounded-lg'>
              <div className='bg-purple-700 w-9 h-9 p-2 rounded-md'>
                {type==="email"&&<MdOutlineEmail className='text-white text-xl'/>}
                {type==="calendar"&&<MdOutlineCalendarToday className='text-white text-xl'/>}
                {type==="person"&&<MdPersonOutline className='text-white text-xl'/>}
                {type==="credit"&&<MdOutlineCreditCard className='text-white text-xl'/>}
                {type==="apps"&&<MdOutlineApps className='text-white text-xl'/>}
                {type==="notification"&&<MdNotificationsNone className='text-white text-xl'/>}
                {type==="message"&&<MdOutlineMessage className='text-white text-xl'/>}
                </div>              
              <h3 className='text-2xl my-3'>{title}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
    )
}

export default FeatureCard;