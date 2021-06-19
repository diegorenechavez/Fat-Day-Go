import { connect } from 'react-redux';
import NavBar from './NavBar';
import {logout} from '../../actions/sessionActions'
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
    currentUserName: state.entities.users[state.session.currentUser],
});

const mapDispatchToProps = dispatch=> {
    return {
        logout: ()=> dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)


