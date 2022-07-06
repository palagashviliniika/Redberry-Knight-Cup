import React from 'react';
import Button from "../Components/Button";

const Home = ({variable, children}) => {
    return (
        <div>
            {variable} {children}
            <Button>asd</Button>
            <Button>Get Started</Button>
            <Button number={variable}/>
        </div>
    );
};

export default Home;