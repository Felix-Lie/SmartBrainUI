import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <ParticlesProvider init={particlesInit}>
            <Particles
                id="tsparticles"
                options={{
                    // background: {
                    //     color: 'transparent',
                    // },
                    particles: {
                        number: {
                            value: 180,
                            density: {
                                enable: true,
                                value_area: 800,
                            }
                        },
                        color: {
                            value: '#2b1055',
                        },
                        opacity: {
                            value: 0.5,
                        },
                        size: {
                            value: 3,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        links: {
                            enable: true,
                            color: '#2b1055',
                            opacity: 0.5,
                            distance: 150,
                            width: 1,
                            shadow: {
                                enable: true,
                                color: '#2b1055',
                                blur: 5,
                            },
                        },
                    },
                }}
            />
        </ParticlesProvider>
    );
};

export default ParticlesBackground;