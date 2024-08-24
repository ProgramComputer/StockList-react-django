import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStockForm from "./NewStockForm";

import axios from "axios";
class NewStockModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };
 
  equalize = e => {
            axios.patch('http://localhost:8000/api/equalize/', {pk:0}).then(()=>{
 this.setState(); 
 window.location.reload();
  
            })
};

  render() {
    const create = this.props.create;

    var title = "Editing Stock";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Stock";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }
    var secondButton = (
        <Button
          color="primary"
          className="float-right"
          onClick={
       this.equalize     
            
        }
          style={{ minWidth: "200px" }}
        >
          Equalize
        </Button>
      );

    return (
      <Fragment>
        {create ? secondButton: null}
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewStockForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              stock={this.props.stock}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewStockModal