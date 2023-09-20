import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cell = styled.div`
    &:nth-child(1) {
        flex: 0 0 calc(25% + 1rem);
    }

    &:nth-child(2) {
        @media (max-width: 767px) {
            display: none;
        }
        flex: 0.5;
    }
    &:nth-child(3) {
        @media (max-width: 767px) {
            text-align: right;
        }
    }
`;

const Header = () => {
    return (
        <div className="flex flex-row align-start justify-between md:justify-start">
            <Cell>
                <Link to={"/"}>Darpa</Link>
            </Cell>
            <Cell style={{ flex: 1 }}>
                ( tending&nbsp;
                <span style={{ fontSize: "0.7em" }}>towards</span>&nbsp;
                <span style={{ fontSize: "0.5em" }}>friendship</span> )
            </Cell>
            <Cell className="flex flex-row gap-8">
                <Link to="/about">???</Link>
                <Link to="/digest">Digest</Link>
            </Cell>
        </div>
    );
};

export default Header;
