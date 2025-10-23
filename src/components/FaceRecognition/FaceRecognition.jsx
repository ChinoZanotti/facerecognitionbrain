import './FaceRecognition.css';

export default function FaceRecognition ({ ImgUrl }) {
    return(
        <div className='center'>
            <img alt='' src={ImgUrl} />
        </div>
    );
}