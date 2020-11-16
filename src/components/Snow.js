import Particles from 'react-tsparticles';

function Snow(props) {
  return (
    <Particles
            id="theydobevibin"
            style={{position:"absolute", zIndex: 10, left: 0,}}
            height={props.sectionHeight || "50vw"}
            width="100%"
            options={{
              particles: {
                move: {
                  enable: true,
                  speed: .8,
                  direction: 'bottom',
                },
                size: {
                  value: 2.5,
                  random: {
                    enable: true,
                    minimumValue: .5
                  },
                },
                opacity: {
                  value: .6,
                  random: {
                    enable: true,
                    minimumValue: .2,
                  },
                  animation: {
                    enable: true,
                    minimumValue: .2,
                    speed: 1
                  }
                },
                number: {
                  // limit: 100,
                  number: 200,
                  density: {
                    enable: true,
                    area: 100,
                  }
                },
              },
            }}   
    />
  )
}

export default Snow;