import React, { Component, Fragment } from "react";

import axios from "axios";

import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteStock = pk => {
    axios.delete(API_URL + pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    return (
      <Fragment>
        <button color="danger" onClick={() => this.toggle()}>
          Remove
        </button>
        <div isOpen={this.state.modal} toggle={this.toggle}>
          <div toggle={this.toggle}>
            Do you really wanna delete the stock?
          </div>

          <div>
            <button type="button" onClick={() => this.toggle()}>
              Cancel
            </button>
            <button
              type="button"
              color="primary"
              onClick={() => this.deleteStock(this.props.pk)}
            >
              Yes
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;