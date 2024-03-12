import React from 'react'
import './homePage/homePage.scss'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


function Particle() {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className='particles'
            options={{
                fullScreen: {
                    enable: 'true',
                    zIndex: -1,
                },
                style: {
                    position: "absolute",
                },
                background: {
                    // color: "#000",
                    color: "rgb(255 255 255)",
                },
                detectRetina: true,
                fpsLimit: 300,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    }
                },
                particles: {
                    color: {
                        // value: "#fff",
                        value:'#000'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 300
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 0.25,
                            sync: true,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 2
                    }, move: {
                        random: true,
                        speed: 0.75,
                        enable: true,
                        direction: 'top'
                    }
                }
            }}
        />

    )
}

export default Particle