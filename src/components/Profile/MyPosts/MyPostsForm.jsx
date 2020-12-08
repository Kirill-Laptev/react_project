import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utilities/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';


const maxLength30 = maxLengthCreator(30);

const ProfileAddMessageForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Textarea} placeholder='Post Message' name='newMessage' validate={[requiredField, maxLength30]}/></div>
                <div><button>Add post</button></div>
            </form>
        </div>
    )
}


let ProfileAddMessageReduxForm = reduxForm({
    form: 'profilePost'
})(ProfileAddMessageForm)


export default ProfileAddMessageReduxForm;