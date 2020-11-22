import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media (max-width: 767px) {
        justify-content: space-between;
    }
`;

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
        <HeaderLine>
            <Cell>
                <Link to={"/"}>Darpa</Link>
            </Cell>
            <Cell style={{ flex: 1 }}>
                ( tending&nbsp;
                <span style={{ fontSize: "0.7em" }}>towards</span>&nbsp;
                <span style={{ fontSize: "0.5em" }}>zero</span> )
            </Cell>
            <Cell>
                <Link to="/digest">
                    Digest{" "}
                    <span style={{ position: "relative", top: "1rem" }}>➳</span>
                </Link>
            </Cell>
        </HeaderLine>
    );
};

export default Header;
