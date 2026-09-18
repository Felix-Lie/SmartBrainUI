import React from 'react';
import './FaceRecognition.css'; 

const FaceRecognition = ({ imageUrl }) => { 
    return ( 
        <div className="center"> 
            <div className='absolute left-0 right-0 center'>
                <img src={imageUrl} alt="" width='500px' height='auto'/>
            </div> 
        </div> ); 
    }; 
export default FaceRecognition;