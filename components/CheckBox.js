import {BsCheckCircleFill} from 'react-icons/bs'

const CheckBox = ({data,succes,col}) => {
    return (
        <div className={`flex items-center ${!col?'px-8':''}`}>
        <BsCheckCircleFill className={` ${succes?"text-purple-700":"text-green-500"} text-4xl p-1`}/>
        <span className='p-1'>{data}</span>
        </div>
    )
    }

export default CheckBox;