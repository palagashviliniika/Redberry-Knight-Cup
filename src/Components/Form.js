import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import Popup from "./Popup";

export default function Form() {
    const {getValues, register, handleSubmit, formState: { errors } } = useForm();

    const [value, setValue] = useState({
        name: "",
        email: "",
        number: "",
        dob: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = getValues(e.target.name);
        console.log(getValues(e.target.name))
        const array = [];
        array.push({input: name, value});
        setValue([e.target.name, getValues(e.target.name)]);
        localStorage.setItem("inputValue", JSON.stringify(array));
        console.log(value);
    };

    const onSubmit = data => {
        console.log(JSON.stringify(data), "dataaaaaa");
        sessionStorage.setItem("form",  JSON.stringify(data))
    }

    // console.log(errors);

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // useEffect(() => {
    // },[])

    return (
        <div>

            {isOpen && <Popup handleClose={togglePopup} errors = {errors}/>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name *" {...register("name", {
                    required: "Please enter the name",
                    minLength: {
                        value: 2,
                        message: "Name should not be less than 2 characters long"
                    },
                    onChange: e => handleChange(e)
                }
                )} />

                <p>{errors.name?.message}</p>

                <input type="email" placeholder="Email Address *" {...register("email", {
                    required: "Please enter the email",
                    pattern: {
                        value: /@redberry.ge/i,
                        message: "Please enter the valid email"
                    },
                    onChange: e => handleChange(e)
                }
                )} />

                <p>{errors.email?.message}</p>

                <input type="number" placeholder="Phone Number *" {...register("number", {
                    required: "Please enter the phone number",
                    maxLength: {
                        value: 9,
                        message: "Phone number must be 9 characters long"
                    }, minLength: {
                        value: 9,
                        message: "Phone number must be 9 characters long"
                    },
                    onChange: e => handleChange(e)
                }
                )} />

                <p>{errors.number?.message}</p>

                <input type="date" placeholder="Date of birth *" {...register("dob", {
                    required: "Please enter the date of birth",
                    onChange: e => handleChange(e)
                    },
                )} />

                <p>{errors.dob?.message}</p>

                <input type="submit" onClick={togglePopup} />
            </form>

        </div>

    );
}