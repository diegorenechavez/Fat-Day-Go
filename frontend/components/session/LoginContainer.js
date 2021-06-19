import { connect } from 'react-redux';
import {login, clearErrors } from '../../actions/sessionActions'
import Login from './Login';

const mapStateToProps = (state) => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch)=> {
    return {
      login: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)