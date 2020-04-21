
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
            </div>
            <div className="content">
              <div className="places-buttons">
                <Row>
                  <Col md={6} mdOffset={3} className="text-center">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tl")}
                    >
                      Top Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tc")}
                    >
                      Top Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tr")}
                    >
                      Top Right
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("bl")}
                    >
                      Bottom Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("bc")}
                    >
                      Bottom Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("br")}
                    >
                      Bottom Right
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
