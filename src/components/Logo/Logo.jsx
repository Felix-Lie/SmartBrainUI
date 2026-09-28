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