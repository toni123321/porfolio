import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';


function Routing(props) {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default Routing;