import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import content from "data/books";
import Comprises from "./Comprises";
import Slides from "./Slides";

const PageView = styled.div`
    z-index: 1;
    color: #128ba1;

    @media (max-width: 768px) {
        width: 100%;
        left: 0;
        height: calc(100% - 3rem);
        top: 3rem;
    }

    h1 {
        text-align: left;
    }
    h2 {
        font-style: italic;
        text-align: left;
    }
    h3 {
        font-family: "lmromanunsl10";
        margin-bottom: 1rem;
    }
    h4 {
        font-size: 0.75rem;
        font-family: "lmroman8";
    }

    p {
        max-width: 30rem;
    }

    em {
        font-style: italic;
    }

    a {
        color: #128ba1;

        &:hover {
            color: #0c5a69;
        }
    }

    .indent {
        padding-left: 3rem;
        @media (max-width: 768px) {
            padding-left: 2rem;
        }
    }

    img,
    video {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }

    .extra-space {
        margin-top: 3rem;
    }
`;

const PageViewInside = styled.div`
    max-width: 1024px;
`;

const PageViewDispel = styled(Link)`
    width: 25%;
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
`;

const PageViewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    h1 {
        flex: 0.3;
    }
    h2 {
        flex: 1;
        text-align: right;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 3rem;

        h1 {
            margin-left: 2rem;
        }
        h1,
        h2 {
            text-align: left;
            br {
                display: none;
            }
        }
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 4rem;
`;

const MobileLink = styled(Link)`
    display: none;
    @media (max-width: 768px) {
        top: 0;
        left: 0;
        height: 3rem;
        display: flex;
        position: fixed;
        align-items: center;
        padding: 0.3rem 1rem 0;
        background: rgba(214, 212, 204, 0);
        z-index: 3;
        width: 100%;
        backdrop-filter: blur(20px);
    }
`;

const PageViewExp = () => {
    const { id } = useParams();
    const scrollRef = useRef();
    const { title, tagline, media, excerpt, items } = content[Number(id) - 1];

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    }, [id]);

    return (
        <>
            <MobileLink to="/">Darpa</MobileLink>
            <PageView
                className="z-10 fixed top-0 left-[24vw] w-[76vw] h-full overflow-auto bg-darpa bg-opacity-40 backdrop-blur-[20px] p-8"
                ref={scrollRef}
            >
                <PageViewInside>
                    <Top>
                        <PageViewHeader>
                            <h1>{title}</h1>
                            <h2>{tagline}</h2>
                        </PageViewHeader>
                        <Slides media={media} />
                    </Top>
                    {excerpt}
                    <Comprises items={items} />
                </PageViewInside>
            </PageView>
            <PageViewDispel to="/" />
        </>
    );
};

export default PageViewExp;
