import React from "react";
import InputField from "../components/InputField";
import { authenticationSlice } from "../features/login/loginSlice";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' , password: '' }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async authenticate(email, password){
        const response = await fetch(
            'https://localhost:7096/api/React01/sign-in',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({email: email, password: password})
            }
        );

        let result = await response.json();
        return result;
    } 

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.authenticate("dos", "dos").then(value => {
            if (value?.token){
                localStorage.setItem('token', value.token);
                const newState = authenticationSlice.reducer(
                    { value: true },
                    authenticationSlice.actions.login()
                )
                console.log(newState);
                window.location.href = "/";
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="text-light-grey flex flex-row justify-center">
                    <div className="border rounded-md p-8 flex flex-col">
                        <h6 className="mb-4">Login</h6>
                        <InputField 
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            type="text"
                            onChange={this.handleInputChange}
                            />
                        <InputField
                            name="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            type="password"
                            onChange={this.handleInputChange}
                            />
                        <div className="flex flex-row justify-around">
                            <input type="submit" value="Log in" className="border rounded-md px-4 py-1" href="/"></input>
                            <a className="border rounded-md px-4 py-1" href="/"> Sign In</a>
                        </div>

                    </div>
                </div>
            </form>
        )
    }
}

export default Login;