import React, { Component } from 'react';
import FormField from '../../utils/Form/formField';
import { update, generateData, isFormValid, PopulateFields } from '../../utils/Form/formAction';

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


    componentDidMount = () => {
        const newFormData = PopulateFields(this.state.formdata, this.props.user.userData);

        this.setState({
            formdata: newFormData
        })
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
                <form onsubmit={(event) => this.submitForm(event)}>
                    
                    <h2>Personal Information</h2>

                    <div className="form_block_two">
                        <div className="block">
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                        <div className="block">
                            <FormField
                                id={'lastname'}
                                formdata={this.state.formdata.lastname}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </div>

                    <div>
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>

                    {
                        this.state.formSuccess?
                            <div className='form_succes'>Succes</div>
                        :null
                    }

                    <div>
                        {this.state.formError ?
                            <div className="error_label">
                                Please check your data
                                        </div>
                            : null}
                        <button onClick={(event) => this.submitForm(event)}>
                            Update Personal Info
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UpdatePersonalInfo);
