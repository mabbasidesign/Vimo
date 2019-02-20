import React, { Component } from 'react';
import FormField from '../../utils/Form/formField';
import { update, generateData, isFormValid } from '../../utils/Form/formAction';

import { connect } from 'react-redux';

class UpdatePersonalInfo  extends Component {

    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
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
            }
        }
    }


    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'update_user');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'update_user');
        let formIsValid = isFormValid(this.state.formdata,'update_user')

        if(formIsValid){
           console.log('data to submit', dataToSubmit)
        } else {
            this.setState({
                formError: true
            })
        }
    }



    render() { 
        return (
            <div>
                <form>
                    personal info
                </form>
            </div>
        );
    }
}
 
export default UpdatePersonalInfo;

