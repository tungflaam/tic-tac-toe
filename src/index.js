import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function formatName(user) {
    console.log(user);
    return user.firstName + ' ' + user.lastName;
}

    const user = {
        firstName:  'Lam',
        lastName : 'Dinh',
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>{element}</h1>);
