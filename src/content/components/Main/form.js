import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import _ from 'lodash';

import { dNc } from '../../../content/scripts/custom/utilities';
import fetchDataBuilder from '../../../foundation/redux/Factories/FetchData';
// import * as storeAction from '../../../foundation/redux/globals/DataStoreMulti/actions';

const fetchDataTransactionStateMainID = 'alumniBaseFormApiCall';
const FetchData = fetchDataBuilder(fetchDataTransactionStateMainID);
// const dataStoreID = 'inputFormData';


class Form extends React.Component {
  handleEmail(e) {
    e.preventDefault();

    const email = this.email.value;
    const comment = this.comment.value;
    const sendData = { email, comment };

    this.setState({ sendData });
  }

  handleError(err) {
    this.setState({ error: true, message: dNc(err) === true ? err : null });
  }

  handleSuccess() {
    this.setState({ success: true });
  }

  render() {
    let sendData = null;
    let active = false;

    // check to see if we have any data to send
    if (dNc(this.state) && dNc(this.state.sendData)) {
      ({ sendData } = this.state);
      active = true;
    }

    // check if the thing was a success
    if (dNc(this.state) && this.state.success === true) {
      return (
        <div className="alert alert-success" role="alert">
  Thanks for your message, we will get back to you as soon as possible.
        </div>
      );
    }

    // populate an error message to display
    let errorMessage = null;

    // check if there is an error
    if (dNc(this.state) && this.state.error === true) {
      // check to see if there is an error message
      if (this.state.message !== null) {
        errorMessage = <div className="alert alert-warning" role="alert">{this.state.message}</div>;
      } else {
        errorMessage = <div className="alert alert-warning" role="alert">Something went wrong, please email us at hello@alumnibaseapp.com with your question</div>;
      }
    }

    return (
      <div>
        {errorMessage}
        <h5 htmlFor="exampleInputEmail1" style={{ fontWeight: '600', color: '#fff' }}>Contact us</h5>
        <div className="mb-2">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email" ref={(element) => { this.email = element; }} />
        </div>
        <div className="mb-2">
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments" rows="3" ref={(element) => { this.comment = element; }} />
        </div>
        <button type="button" className="btn btn-outline-light mb-5" onClick={e => this.handleEmail(e)}>Send</button>
        <FetchData
          active={active}
          fetchURL="api/alumnibase/contactUs"
          sendData={sendData}
          errorCallback={(err) => { this.handleError(err); }}
          fatalCallback={() => { this.handleError(); }}
          successCallback={() => { this.handleSuccess(); }}
          noRender
        />
      </div>
    );
  }
}

export default Form;
