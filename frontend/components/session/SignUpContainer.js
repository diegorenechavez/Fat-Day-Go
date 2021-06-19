import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/sessionActions";
import SignUpForm from './SignUp';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
