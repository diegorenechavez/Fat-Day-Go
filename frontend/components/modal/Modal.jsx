// import React from "react";
// import { closeModal } from "../../actions/modalActions";
// import { connect } from "react-redux";
// // import LoginFormContainer from "../login/login_container";
// import SignUpFormContainer from "../session/SignUpContainer";



// function Modal({ modal, closeModal }) {
//   if (!modal) {
//     return null;
//   }
//   let component;

//   switch (modal) {
//     case "login":
//     //   component = <LoginFormContainer />;
//       break;
//     case "signup":
//       component = <SignUpFormContainer />;
//       break;
//     case "create board":
      
//       break;
//     case "create pin":
      
//       break;
//     default:
//       return null;
//   }
//   return (
//     <div onClick={closeModal}>
//       <div className="modal-child" onClick={(e) => e.stopPropagation()}>
//         {component}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     modal: state.ui.modal,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     closeModal: () => dispatch(closeModal()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);