import React  from 'react';

const formField = ({formdata, change, id}) => {

    const showError = () => {
        let errorMesage = null;

        if(formdata.validation && !formdata.valid){
            errorMesage = (
                <div className='error_label'>
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMesage;
    }
    
    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className='formBlock'>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({event, id, blur: true})}
                            onChange={(event) => change({event, id})}
                        />
                        {showError()}
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }
        return formTemplate
    }


    return (
        <div>
            {renderTemplate()}
        </div>
    );
}
 
export default formField;