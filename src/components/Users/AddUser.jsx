/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import * as url from './../../ultils/URL';
class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      salary: 0,
      country: '',
      city: '',
      isRedirect: false,
      message: '',
      isError: false,
      show: true
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onChangeValue(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  async  onSubmitForm(event) {
    event.preventDefault();
    var data = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      salary: this.state.salary,
      country: this.state.country,
      city: this.state.city
    }
    const response = await axios({
      method: 'POST',
      url: url.BASE_URL + '/rest/insert',
      data: data
    });
    console.log(response)
    if (response.status === 200) {
      this.setState({
        isRedirect: true
      })
    } else {
      this.setState({
        isError: true,
        message: response.data.message
      })
    }
  }

  onClickCancel = () => {
    this.setState({
      isRedirect: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render() {
    const { isRedirect, isError, message, show } = this.state;
    const showError = (isError === true) ? (
      <Modal show={show} onHide={this.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your email again </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={this.handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
    )
      : '';

    if (isRedirect) {
      return <Redirect to="admin/table" />
    }

    return (
      <div className="content" >
        <Grid fluid>
          <Row>
            <Col md={8} style={{ transform: 'translate(25%,20%)' }}>
              <Card
                title="Add New User"
                content={
                  <form onSubmit={this.onSubmitForm}>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "FullName",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "fullName",
                          name: "fullName",
                          value: this.state.fullname,
                          onChange: this.onChangeValue,
                          required: true
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          name: "email",
                          value: this.state.email,
                          onChange: this.onChangeValue,
                          required: true
                        },
                        {
                          label: "PassWord",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "PassWord",
                          name: "password",
                          value: this.state.password,
                          onChange: this.onChangeValue,
                          required: true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Salary",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Salary",
                          name: "salary",
                          value: this.state.salary,
                          onChange: this.onChangeValue,
                          required: true
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          name: "country",
                          value: this.state.country,
                          onChange: this.onChangeValue,
                          required: true
                        },
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          name: "city",
                          value: this.state.city,
                          onChange: this.onChangeValue,
                          required: true
                        }
                      ]}
                    />
                    {showError}
                    <div className="button" style={{ display: 'flex' }}>
                      <Button
                        bsStyle="info"
                        pullRight fill
                        type="submit"
                        style={{ margin: '2px' }}
                      >
                        Save
                    </Button>
                      <Button
                        bsStyle="warning"
                        pullRight fill
                        onClick={this.onClickCancel}
                        style={{ margin: '2px' }}
                      >
                        Cancel
                    </Button>
                    </div>
                  </form>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddNew;
