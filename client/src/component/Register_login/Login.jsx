import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FormField from '../../utils/Form/formField';
import { update } from '../../utils/Form/formAction';

class Login extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata:{
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    submitForm = () => {
        
    }

    updateForm = (element) => {
        const newFormData = update(element, this.state.formdata, "login");
        this.setState({
            formError: false,
            formdata: newFormData
        });
    }
    
    render() { 
        return (
            <div>
                <form onSubmit={(event) => this.submitForm(event)}>

                    <FormField
                        id="email"
                        formdata={this.state.formdata.email}
                        change={(element) => {this.updateForm(element)}}
                    />

                    <FormField
                        id="password"
                        formdata={this.state.formdata.password}
                        change={(element) => {this.updateForm(element)}}
                    />

                </form>
            </div>
        );
    }
}
 
export default Login;