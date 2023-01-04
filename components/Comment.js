import {AiFillStar} from 'react-icons/ai';

const Comment = ({ comment,stars,author,footer }) => {
    return (
        <div className='bg-white p-10 rounded-xl m-6 basis-1/4'>
            <p className='text-l md:text-xl'>{comment}</p>
              <div className='flex py-5'>
                {[...Array(stars)].map((_,i)=><AiFillStar className='text-green-500' />)}
                {[...Array(5-stars)].map((_,i)=><AiFillStar className='text-gray-400' />)}
              </div>
              <h3 className='font-semibold'>{author}</h3>
              <h5 className='text-sm'>{footer}</h5>
          </div>
    )
};

export default Comment;