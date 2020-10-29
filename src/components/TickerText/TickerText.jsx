import React from "react";
import styled, { keyframes } from "styled-components";

const tickerAnim = keyframes`
    0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }

        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
`;

const FONT_HEIGHT = 48;

const TickerShowHide = styled.div`
    /* transition: opacity 0.05s ease; */
`;

const TickerBox = styled.div`
    position: fixed;
    width: 100%;
    height: ${FONT_HEIGHT}px;
    font-size: 0.75rem; /* ${FONT_HEIGHT / 2}px; */
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
    @media screen and (max-width:768px) {
        display: none;
    }
`;

const TickerInside = styled.span`
    display: inline-block;
    padding-left: 100%;
    animation: ${tickerAnim} ${props => props.speed}s linear infinite;
    animation-delay: -${props => props.speed / 2}s;
`;

const Ticker = styled.div`
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    line-height: ${FONT_HEIGHT}px;
`;

const Ticker2 = styled(Ticker)`
    ${TickerInside} {
        animation-delay: 0s;
    }
`;

const orientations = [
    {
        left: 0,
        top: 0,
        transform: "rotate(0deg)",
        transformOrigin: "0% 0%"
    },
    {
        right: FONT_HEIGHT,
        bottom: 0,
        transform: "rotate(90deg)",
        transformOrigin: "100% 100%"
    },
    {
        bottom: 0,
        right: -FONT_HEIGHT,
        transform: "rotate(-90deg)",
        transformOrigin: "0% 100%"
    },
    {
        bottom: 0,
        right: 0,
        transform: "rotate(-180deg)",
        transformOrigin: "50%"
    }
];

export default ({ text, isShowingText }) => {
    const speed = 80;
    return (
        <TickerShowHide style={{ opacity: isShowingText ? 1 : 0 }}>
            {orientations.map((orientStyle, index) => (
                <TickerBox key={index} style={orientStyle}>
                    <Ticker>
                        <TickerInside speed={speed}>
                            {[...Array(4).keys()].map(i => (
                                <span key={i}>{text}&nbsp;</span>
                            ))}
                        </TickerInside>
                    </Ticker>
                    <Ticker2>
                        <TickerInside speed={speed}>
                            {[...Array(4).keys()].map(i => (
                                <span key={i}>{text}&nbsp;</span>
                            ))}
                        </TickerInside>
                    </Ticker2>
                </TickerBox>
            ))}
        </TickerShowHide>
    );
};
