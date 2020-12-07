import React from 'react';
import { reduxForm, Field } from 'redux-form';

const ProfileAddMessageForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'textarea'} name={'newMessage'}></Field></div>
                <div><button>Add post</button></div>
            </form>
        </div>
    )
}


let ProfileAddMessageReduxForm = reduxForm({
    form: 'profilePost'
})(ProfileAddMessageForm)


export default ProfileAddMessageReduxForm;