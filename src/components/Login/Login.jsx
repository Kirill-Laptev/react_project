import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginTC } from '../../redux/authReducer';
import { Input } from '../../common/FormControls/FormControls';
import { requiredField } from '../../utilities/validators/validators';



const LoginForm = (props) => {
    console.log('rerender');
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='Login' name='email' component={Input} validate={[requiredField]}/></div>
                <div><Field placeholder='Password' name='password' component={Input} validate={[requiredField]}/></div>
                <div><Field type='checkbox' name='rememberMe' component={Input}/>Remember Me</div>
                <div><button>Login</button></div>
            </form>
    )
}


const ReduxLoginForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData)
        console.log(formData)
    }

    return (
        <>
        {props.isAuth
        ? <div>You are logined</div>
        : <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>}
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {
    login: loginTC,
})(Login); 