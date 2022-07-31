import React from 'react';

function LoginForm({}) {
    return (
        <div className="loginForm">

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com"/>
            </div>


        </div>
    );
}

export default LoginForm;