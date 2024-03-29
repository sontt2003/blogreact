import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage";
import Blog from "../../pages/BlogPage";
import Single from "../../pages/SinglePage";
import Author from "../../pages/AuthorPage";
import Create from "../../pages/CreatePosts";
import Fix from "../../pages/UpdatePosts";
import Tranfer from "../../pages/TransferPage";

const DefautRouter = () => {
    return <Navigate to="/home" />;
};

const Content: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/*" element={<DefautRouter />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/single/*" element={<Single />} />
            <Route path="/author/*" element={<Author />} />
            <Route path="/create/*" element={<Create />} />
            <Route path="/fix/*" element={<Fix />} />
            <Route path="/transfer/*" element={<Tranfer />} />
        </Routes>
    );
};

export default Content;
