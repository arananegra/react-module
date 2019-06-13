import { connect } from 'react-redux';
import { State } from 'reducers';
import { updateLoginCredentialsAction } from './actions';
import { LoginComponent, LoginDispatchProps, LoginProps } from './login.component';
import { CredentialsEntityVm } from './login.vm';

const mapStateToProps = (state: State): LoginProps => ({
    //: state.loginCredentialsReducer.username,
    credentials: state.loginCredentials
})

const mapDispatchToProps = (dispatch): LoginDispatchProps => ({
    onUpdateCredentials: (credentials: CredentialsEntityVm) => dispatch(updateLoginCredentialsAction(credentials))
});

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);

