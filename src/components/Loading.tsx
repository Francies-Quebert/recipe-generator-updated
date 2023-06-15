import Lottie from 'lottie-react';
import animationData from '../assets/loading.json';

const Loading = () => {
    return (
        <div className='w-full flex justify-center items-center h-screen'>
            <Lottie
                animationData={animationData}
                className='h-52'
            />
        </div>
    )
}

export default Loading