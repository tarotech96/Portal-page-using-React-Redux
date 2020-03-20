
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import avatar from "assets/img/jisoo4.jpg";
import * as url from './../ultils/URL';
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      fullname: '',
      address: '',
      country: '',
      city: '',
      description: '',
      isUpdate: false
    }
  }

  onChangeValue = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmitForm = async (event) => {
    event.preventDefault();
    const data = {
      company: this.state.company,
      fullname: this.state.fullName,
      email: JSON.parse(localStorage.getItem('userInfo')).email,
      address: this.state.address,
      country: this.state.country,
      city: this.state.city,
      description: this.state.description
    }
    console.log(data)

    const response = await axios({
      url: url.BASE_URL + '/rest/update',
      method: 'POST',
      data: data
    });

    console.log(response);
    if (response.status === 200) {
      this.setState({
        isUpdate: true
      })
    }

  }
  render() {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var { company, fullname, address, country, city, description } = this.state;
    company = userInfo.company;
    fullname = userInfo.fullName;
    address = userInfo.address;
    country = userInfo.country;
    city = userInfo.city;
    description = userInfo.description;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="User Profile"
                content={
                  <form onSubmit={this.onSubmitForm}>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          name: "company",
                          value: company,
                          onChange: this.onChangeValue
                        },
                        {
                          label: "FullName",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "FullName",
                          name: "fullname",
                          value: fullname,
                          onChange: this.onChangeValue
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: userInfo.email,
                          disabled: true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Adress",
                          name: "address",
                          value: address,
                          onChange: this.onChangeValue
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          value: city,
                          onChange: this.onChangeValue
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          value: country,
                          onChange: this.onChangeValue
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={this.onChangeValue}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Taro Oppa"
                userName="tarooppa"
                description={
                  <span>
                    "I'm Sofware Engineer
                    <br />
                    I like coding"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
