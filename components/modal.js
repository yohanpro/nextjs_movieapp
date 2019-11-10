import MovieCreateForm from "./movieCreateForm";
import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeBtn = null;
  }
  submitModal = () => {
    alert("Submitting Modal");
    this.closeModal();
  };
  closeModal = () => {
    this.closeBtn.click();
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ marginTop: "80px" }}
        >
          Create Movie
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Modal
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={ele => (this.closeBtn = ele)}
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitModal}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Modal = props => {
//   let closeBtn = null;
//   const submitModal = () => {
//     alert("Submitting Modal");

//     closeBtn.click();
//   };
//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//         style={{ marginTop: "80px" }}
//       >
//         Create Movie
//       </button>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Create Modal
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 ref={ele => (closeBtn = ele)}
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={submitModal}
//                 >
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Modal;
