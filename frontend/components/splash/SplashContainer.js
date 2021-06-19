import { connect } from 'react-redux';
import Splash from './Splash';
import {openModal } from '../../actions/modalActions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = {
    // openModal: (type) => dispatchEvent(openModal(type))
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
