import React from 'react';

const Button = ({number, children}) => {
    return (
        <button>
            {children} {number}
        </button>
    );
};

export default Button;