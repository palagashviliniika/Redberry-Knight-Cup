// import React, {useState} from 'react';
// import ButtonNext from "../Components/ButtonNext";
// import {Buttons, Inputs} from "../Components/HomeElements";
// import Input from "../Components/Input";
//
// const Home = ({variable, children}) => {
//     const [errors, setErrors] = useState();
//     return (
//         <div>
//             {
//                 errors &&
//                 <div>errors</div>
//             }
//             <Buttons>
//                 {variable} {children}
//                 <ButtonNext>asd</ButtonNext>
//                 <ButtonNext>Get Started</ButtonNext>
//                 <button onClick={()=>{setErrors(true)}}>Start</button>
//                 <ButtonNext number={variable}/>
//             </Buttons>
//
//             <Inputs>
//                 <Input type={"name"} placeholder={"Name *"}/>
//                 <Input type={"email"} placeholder={"Email Address *"}/>
//                 <Input type={"email"} placeholder={"Email Address *"}/>
//             </Inputs>
//         </div>
//     );
// };

// export default Home;