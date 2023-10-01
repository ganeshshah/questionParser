import React, { useState, useEffect } from "react";

const Alert = ({ message, type }) => {
    const [show, setShow] = useState(true);
    let color = 'green';

    if (type === 'success') {
        color = 'green';
    }
    if (type === 'failure') {
        color = 'red';
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        show && (
            <div
                className={`w-full animate-slide-in-bottom fixed bottom-0 left-0  p-4 bg-${color}-500 text-white text-center z-50`}
            >
                {message}
            </div>
        )
    );
};

export default Alert;





