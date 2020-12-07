import React from 'react';
import { reduxForm, Field } from 'redux-form';

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'}/>
            <button>Отправить</button>
        </form>     
    )
}


const DialogsFormRedux = reduxForm({
    form: 'dialogsMessage'
})(DialogsForm)


export default DialogsFormRedux;