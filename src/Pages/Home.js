import React, {useState} from 'react';
import Button from "../Components/Button";
import {Buttons, Inputs} from "../Components/HomeElements";
import Input from "../Components/Input";

const Home = ({variable, children}) => {
    const [errors, setErrors] = useState();
    return (
        <div>
            {
                errors &&
                <div>errors</div>
            }
            <Buttons>
                {variable} {children}
                <Button>asd</Button>
                <Button>Get Started</Button>
                <button onClick={()=>{setErrors(true)}}>Start</button>
                <Button number={variable}/>
            </Buttons>

            <Inputs>
                <Input type={"name"} placeholder={"Name *"}/>
                <Input type={"email"} placeholder={"Email Address *"}/>
                <Input type={"email"} placeholder={"Email Address *"}/>
            </Inputs>
        </div>
    );
};

export default Home;