import React from "react";
import styled from "styled-components";

const ComprisesOl = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 25vh;
    text-style: normal;
    a:hover {
        color: #0c5a69;
    }
`;

const ComprisesItem = styled.div`
    color: #128ba1;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    > div {
        display: flex;
        justify-content: space-between;
        > div {
            margin-right: 1rem;
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`;

const ComprisesExport = ({ items }) => (
    <>
        <p className="extra-space">Comprises</p>
        <ComprisesOl className="indent">
            {items.map(({ catno, title, type, location, url }) => (
                <li key={catno}>
                    <ComprisesItem
                        as={url ? "a" : "div"}
                        href={url || null}
                        target={url ? "_blank" : null}
                    >
                        <div>
                            <div>
                                ({catno}) {title} {url ? "⤑" : ""}
                            </div>
                            <div>{type}</div>
                        </div>
                        <div>{location}</div>
                    </ComprisesItem>
                </li>
            ))}
        </ComprisesOl>
    </>
);

export default ComprisesExport;
