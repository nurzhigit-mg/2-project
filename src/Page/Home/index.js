import React from 'react';
import Tabs from "./Tabs";
import Follow from "./Follow";
import Accardion from "./Accardion";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Tabs/>
            <Follow/>
            <Accardion/>
        </div>
    );
};

export default Home;