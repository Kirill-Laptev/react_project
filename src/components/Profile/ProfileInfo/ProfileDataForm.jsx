import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../../common/FormControls/FormControls';
import style from '../../../common/FormControls/FormControls.module.css';

const ProfileDataForm = ({handleSubmit, userProfile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
          <button>Save</button>

          {error 
          ? <div className={style.formSummuryError}>{error}</div>
          : ''}

          <div><b>Looking for a job: </b><Field type='checkbox' placeholder='Looking for a job' name='lookingForAJob' component={Input}/></div>
          <div><b>My professionals skills: </b><Field placeholder='My skills' name='lookingForAJobDescription' component={Input} validate={[]}/></div>
          <div><b>Full name: </b><Field placeholder='Full Name' name='fullName' component={Input} validate={[]}/></div>
          <div><b>About me: </b><Field placeholder='About me' name='aboutMe' component={Input} validate={[]}/></div>

          <h3>Contacts</h3>
          {Object.keys(userProfile.contacts).map((key) => {
            return <div>
                {key}: <Field placeholder={key} name={'contacts.' + key} component={Input} validate={[]}/>
              </div>
          })}
        </form>
    )
}


export const ProfileDataReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataReduxForm;