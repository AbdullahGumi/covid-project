import { useState, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Circle = styled(Box)`
    display: flex;
    transition: all 330ms ease-in-out;
    transform: ${({ animatePercent }) => {
        if(animatePercent < 50) {
          return 'scale(0)'
        } else if (animatePercent < 120) {
            return 'scale(0.2)'
        } else if (animatePercent < 200 && animatePercent > 100) {
            return 'scale(0.5)'
        } else if (animatePercent < 250 && animatePercent > 200) {
            return 'scale(0.8)'
        } else if (animatePercent > 250) {
            return 'scale(1)'
        }
      }
    }};
    justify-content: center;
    align-items: center;
    word-break: break-word;
    text-align: center;
    position: absolute; 
    background-color: ${props => props.color}; 
    padding: 8px;
    border-radius: 124px;
    width: ${props => `${props.dimension.md}px`}; 
    height: ${props => `${props.dimension.md}px`};
    top: ${props => props.top.md}; 
    left: ${props => props.left.md};

    @media only screen and (min-width: 992px) and (max-width: 1200px){
        width: ${props => `${props.dimension.xs}px`}; 
        height: ${props => `${props.dimension.xs}px`};
        top: ${props => props.top.md}; 
        left: calc(${props => props.left.md} / 1.3);
    }

    @media only screen and (min-width: 900px) and (max-width: 991px){
        width: calc(${props => `${props.dimension.xs}px`} - 5px); 
        height: calc(${props => `${props.dimension.xs}px`} - 5px);
        top: ${props => props.top.md}; 
        left: calc(${props => props.left.md} / 1.6);
    }
    
    @media only screen and (max-width: 900px){
        width: ${props => `${props.dimension.xs}px`}; 
        height: ${props => `${props.dimension.xs}px`};
        top: calc(${props => props.top.xs} - 250px); 
        left: calc(${props => props.left.xs} - 20px);
    }
`;


const Symptom = ({ dimension, text, color, top, left, delay, view }) => {
    const [isVisible, setVisible] = useState(false)
      const [percentShown, setPercentShow] = useState({
        item: 0,
      })
      const refItem = useRef(null)

      // calculates the symptom's location on the screen 
      useLayoutEffect(() => {
        const topPosition = (element) => element.getBoundingClientRect().top
        const getHeight = (element) => element.offsetHeight
        const elementPosition = topPosition(refItem.current)
        const elementHeight = getHeight(refItem.current)
        const onScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight
          if (elementPosition < scrollPosition) {
            // Element scrolled to
            setVisible(true)
            let itemPercent = ((scrollPosition - elementPosition) * 100) / elementHeight
            if (itemPercent < 0) itemPercent = 0
            setPercentShow((prevState) => ({
              ...prevState,
              item: itemPercent,
            }))
          } else if (elementPosition > scrollPosition) {
            // Element scrolled away (up)
            setVisible(false)
          }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      }, [])

    return(
        <Circle 
            animate={isVisible}
            animatePercent={percentShown.item}
            ref={refItem}
            color={color} 
            dimension={dimension} 
            top={top} 
            left={left} 
            delay={delay} 
            view={view}
        >
            <Typography color={'white'}>
                {text}
            </Typography>
        </Circle>
    )
}

export default Symptom