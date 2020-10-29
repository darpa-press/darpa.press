import React from "react";
import "../../../node_modules/normalize.css/normalize.css";
import "fonts/fonts.css";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookList from "components/BookList/BookList";
import GlobalStyle from "components/GlobalStyle/GlobalStyle";
import Header from "components/Header/Header";
import PageView from "components/Content/PageView";
import Digest from "components/Digest/Digest";

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    @media screen and (min-width: 800px) {
        padding: 1rem;
    }
`;

const App = () => {
    return (
        <Router>
            <Header />
            <Route path="/v/:id">
                <PageView />
            </Route>
            <Route path="/"></Route>
            <Switch>
                <Route path="/digest">
                    <Digest />
                </Route>
                <Route>
                    <BookList />
                </Route>
            </Switch>
        </Router>
    );
};

const AppWithFonts = () => (
    <>
        <GlobalStyle />
        <Container>
            <App />
        </Container>
    </>
);

export default AppWithFonts;
