// import { Tilt } from 'react-tilt';
// import './Logo.css';
// import brain from './brain.png';

// const Logo = () => {
//     return (
//         <div className="ma4 nt0">
//             <Tilt
//                 className="Tilt br2 shadow-2"
//                 options={{ max: 55 }}
//                 style={{ height: 150, width: 150 }}
//             >
//                 <div
//                     className="Tilt-inner pa3"
//                     style={{
//                         height: '100%',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <img
//                         style={{
//                             paddingTop: '5px',
//                             width: '100px',
//                             height: '100px',
//                         }}
//                         src={brain}
//                         alt="logo"
//                     />
//                 </div>
//             </Tilt>
//         </div>
//     );
// };
import { Tilt } from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 nt0">
            <Tilt
                className="Tilt br2 shadow-2"
                options={{
                    max: 55,
                    perspective: 1000,
                    scale: 1.1,
                    speed: 450,
                }}
                style={{
                    height: 150,
                    width: 150,
                }}
                onMouseMove={() => {}}
            >
                <div
                    className="Tilt-inner pa3"
                    style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        style={{
                            paddingTop: '5px',
                            width: '100px',
                            height: '100px',
                        }}
                        src={brain}
                        alt="logo"
                    />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;

// export default Logo;

// import React from 'react';
// import { Tilt } from 'react-tilt';
// import './Logo.css';
// import brain from './brain.png';

// const Logo = () => {
//     return (
//         <div className="ma4 nt0">
//             <Tilt className="Tilt br2 shadow-2" options={{ max:55 }} style={{ height: 150, width: 150 }}>
//                 <div className="Tilt-inner pa3" style={{height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
//                     <img style={{paddingTop: '5px', width: '100px', height: '100px' }} src={brain} alt="logo"></img>
//                 </div> 
//             </Tilt>
//         </div>
//     )
// }

// export default Logo;


// import './Logo.css';
// import brain from './brain.png';


// import { Tilt } from 'react-tilt';

// const Logo = () => {
//     return (
//         <Tilt
//             options={{
//                 max: 55,
//                 perspective: 1000,
//                 scale: 1.1,
//                 speed: 450,
//             }}
//             onMouseMove={(e) => {
//                 console.log('MOVE', e.nativeEvent.clientX, e.nativeEvent.clientY);
//             }}
//             style={{
//                 height: '150px',
//                 width: '150px',
//                 background: 'red',
//             }}
//         >
//             TEST
//         </Tilt>
//     );
// };

// export default Logo;