import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InvestmentPlanModal(props) {
    let { show, onHide, id, title, roi, min, max, days} = props;

    console.log(props);

  return (
    
    <Modal 
      show={show} 
      onHide={onHide}
      key={id}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-3">
        <h5 className="modal-txt">INVESTMENT DETAILS</h5>
        <p className="modal-txt2">Investment Plan</p>
        <p className="modal-txt3">
          <strong>{title}</strong>
        </p>
        <p className="modal-txt2">investment Profit</p>
        <p className="modal-txt3">{roi}</p>
        <hr></hr>
        
        <div className="mb-4 ">
        <p className="modal-txt2">Investment Method</p>
        <select className="form-select  form-custom" aria-label="Default select example">
          <option className="modal-txt3" selected>bitcoin cash</option>
          <option className="modal-txt3" value="1">ethereum</option>
          <option className="modal-txt3" value="2">bitcoin</option>
        </select>
        </div>

        <div>
          <p className="modal-txt2">Investment Amount</p>
          <input type="email" className="form-control modal-txt3 form-custom" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
        </div>
        <hr></hr>
        <p className="modal-txt">PAYOUT DETAILS</p>
        <div class="row">
          <div class="col-md-4">
            <p className="modal-txt4">Final Payment</p>
            <p className="modal-txt3">0.00 USD</p>
          </div>
          <div class="col-md-4">
            <p className="modal-txt4">Receved Profit</p>
            <p className="modal-txt3">+0.00 USD</p>
          </div>
          <div class="col-md-4">
            <p className="modal-txt4">Total Payout</p>
            <p className="modal-txt3">0.00 USD</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Proceed</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InvestmentPlanModal;