import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../utilities/validators/validators';


const maxLength20 = maxLengthCreator(20);

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder='Write message' name='newMessage' validate={[requiredField, maxLength20]}/>
            <button>Отправить</button>
        </form>     
    )
}


const DialogsFormRedux = reduxForm({
    form: 'dialogsMessage'
})(DialogsForm)


export default DialogsFormRedux;