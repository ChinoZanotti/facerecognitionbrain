import './FaceRecognition.css';

export default function FaceRecognition ({ imgUrl, box }) {
    return(
        <div className='center'>
            <div className='showImg'>
                <img id='inputImage' alt='' src={imgUrl} />
                <div 
                className='bounding-box' 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                >
                </div>
            </div>
        </div>
    );
}