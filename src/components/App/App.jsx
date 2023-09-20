import React from "react";
import "@/fonts/fonts.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import PageView from "@/components/Content/PageView";
import Digest from "@/components/Digest/Digest";
import About from "@/components/About/About";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/v/:id" element={<PageView />} />
            </Routes>
            <Routes>
                <Route path="/digest" element={<Digest />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<BookList />} />
            </Routes>
        </Router>
    );
};

const AppWithFonts = () => (
    <>
        <div className="p-4 md:p-8 md:flex md:flex-col min-h-[100vh] justify-between">
            <App />
        </div>
    </>
);

export default AppWithFonts;
