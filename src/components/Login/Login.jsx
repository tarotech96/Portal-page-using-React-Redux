
import React, { Component } from "react";
import {
    Row,
    Col,
    Alert
} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import * as url from '../../ultils/URL';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            isRedirect: false
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

    onSubmitForm(event) {
        event.preventDefault();
        var data = {
            email: this.state.email,
            password: this.state.password
        }

        const promise = new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: url.BASE_URL + '/login',
                data: data
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err)
            })
        })

        promise.then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.setState({
                    isRedirect: true
                })
                localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));
                localStorage.setItem('token', JSON.stringify(response.data.token));
            } else {
                this.setState({
                    isError: true,
                    message: response.errorr
                })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        const { isRedirect, isError, message } = this.state;
        if (isRedirect) {
            return <Redirect to="admin/dashboard" />
        }
        const errMessage = (isError === true) ? (
            <Alert variant="warning">
                {message}
            </Alert>
        )
            :
            '';

        return (
            <div className="content" >
                <Row>
                    <Col md={6} style={{ transform: 'translate(50%,30%)' }}>
                        <Card
                            title="Welcom To Login Page"
                            content={
                                <form onSubmit={this.onSubmitForm}>
                                    <FormInputs
                                        ncols={["col-md-12", "col-md-12"]}
                                        properties={[
                                            {
                                                label: "Email*",
                                                type: "email",
                                                bsClass: "form-control",
                                                placeholder: "Email",
                                                name: "email",
                                                value: this.state.email,
                                                onChange: this.onChangeValue,
                                                required: true
                                            },
                                            {
                                                label: "PassWord*",
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
                                    {errMessage}
                                    <div className="button" style={{ display: 'flex' }}>
                                        <Button
                                            bsStyle="info"
                                            pullRight fill
                                            type="submit"
                                            style={{ margin: '2px' }}
                                        >
                                            Login
                                    </Button>
                                    </div>
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;
