// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Users from '../admin/Users';

// function DeleteModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Confirm you want to delete this User!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       {show && (
//             <Users 
//             handleShow={handleShow}
//             show={show}
//             setShow={setShow}/>
//           )}
//     </>
//   );
// }


// export default DeleteModal();