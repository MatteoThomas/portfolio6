import { useTransition } from "@react-spring/core";
import { animated, config } from "@react-spring/web";
import React, { useState } from "react";
import styled from "styled-components"
import { Button } from "../../styles/Styles"
import Webdev from "./Webdev";

const Wrapper = styled.div`
    /* text-align: center;
    padding: 40px; */
    /* background-color: #1b4c77; */
    /* width: 100vw; */
`

const Container = styled.div`
    /* padding: 40px;
    margin: 200px 0 0 0;
    min-height: 200px; */
`

const AnimatedWebdev = styled(animated.div)`
`

const ButtonWrap = styled.div`
/* position: absolute;
top:4rem; */
`

const SpringMount = () => {
    const [intervalId, setIntervalId] = useState(0);
    const [disable, setDisable] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    
    // DEFINE ANIMATION PARAMETERS
const transition = useTransition(isVisible, {
    config: isVisible ? { ...config.molasses} : { duration: 150 },
    from: { opacity: 0, transform: `translate3d(0px, -10px, 0px)` },
    enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
    leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` }

    });


    return (

        <Wrapper>
            <ButtonWrap>
            {/* <Button  
                disabled={disable} 
                
                onClick={() => {
                    handleClick()
                    setDisable(true)
                    setIsVisible(v => !v);
                }}> 
                {isVisible ? 'WEB DEVELOPMENT' : 'WEB DEVELOPMENT'}
            </Button>     */}
            </ButtonWrap>

            <Container>
                {transition((style, item) =>
                item ? <div><AnimatedWebdev style={style}>
                                <Webdev/>
                            </AnimatedWebdev></div> : ''
                )}
            </Container>
        </Wrapper>

    )

}

export default SpringMount;