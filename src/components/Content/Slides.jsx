import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Slideshow = styled.div`
    margin: 0;
`;
const Caption = styled.div`
    font-size: 0.75rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    margin-top: 0.5rem;
`;
const Content = styled.div`
    img,
    video,
    iframe {
        cursor: pointer;
    }
`;
const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const IframeSizer = styled.div`
    padding-bottom: 56.25%;
    height: 0;
    width: 100%;
    iframe {
        background: white;
        border: 0;
        height: 200%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        transform-origin: top left;
        transform: scale(0.5);
        width: 200%;
    }
`;

const IframeLink = styled.a`
    z-index: 2;
    backdrop-filter: invert(100%);
    padding: 0.333rem 0.75rem;
    font-size: 0.6rem;
    border-radius: 1rem;
    color: white;
    mix-blend-mode: difference;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    position: absolute;
    top: 1rem;
    transform: translateX(-50%);
    left: 50%;
    &:hover {
        color: white;
        backdrop-filter: invert(85%);
    }
`;

export default ({ media }) => {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        setSlide(0);
    }, [media]);
    return (
        <Slideshow>
            <Content
                onClick={(e) => {
                    setSlide(slide === media.length - 1 ? 0 : slide + 1);
                }}
            >
                {media.map(({ type, url }, index) => (
                    <div
                        key={url}
                        style={{ display: index === slide ? "block" : "none" }}
                    >
                        {type === "video" && (
                            <div>
                                <video
                                    src={url}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                ></video>
                            </div>
                        )}
                        {type === "iframe" && (
                            <IframeContainer>
                                <IframeSizer>
                                    <iframe title="Darpa" src={url}></iframe>
                                </IframeSizer>
                                <IframeLink href={url} target="_blank">
                                    Click to open ➝
                                </IframeLink>
                            </IframeContainer>
                        )}
                        {type === "image" && (
                            <div>
                                <img alt="" src={url} />
                            </div>
                        )}
                    </div>
                ))}
            </Content>
            <Caption>
                {slide + 1} / {media.length}
            </Caption>
        </Slideshow>
    );
};
