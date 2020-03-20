
import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, Pagination } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { Link } from 'react-router-dom';
// import { thArray, tdArray } from "variables/Variables.jsx";
import { connect } from 'react-redux';
import axios from 'axios';
import * as action from './../actions/UserAction';
import * as url from './../ultils/URL';
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      curPage: 1,
      totalsPage: 0,
      perPage: 5,
      isActivePre: true,
      isActiveNext: false
    }
  }

  componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: url.BASE_URL + '/rest/user/list'
      }).then((res) => resolve(res))
        .catch((err) => reject(err))
    })
    promise.then((data) => {
      var { getAllUsers } = this.props;
      getAllUsers(data.data);
      this.setState({
        listUser: data.data
      })
    })
      .catch((err) => console.log(err))
  }

  onChangePage = (curPage) => {
    this.setState({
      curPage: curPage
    })
  }

  prePage = () => {
    var nextPage = this.state.curPage - 1;
    if (nextPage >= 1) {
      this.setState({
        curPage: nextPage
      })
    }
  }

  nextPage = () => {
    var nextPage = this.state.curPage + 1;
    if (nextPage <= this.state.totalsPage) {
      this.setState({
        curPage: nextPage
      })
    }
  }

  render() {
    var { listUser, curPage, totalsPage, perPage, isActivePre, isActiveNext } = this.state;
    var start = (curPage - 1) * perPage;
    var end = curPage * perPage;
    var listRender = listUser.map((ele, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>{ele.id}</td>
            <td>{ele.fullName}</td>
            <td >{ele.email}</td>
            <td>{ele.salary}$</td>
            <td>{ele.city}</td>
            <td>{ele.country}</td>
          </tr>
        </tbody>
      )
    }).slice(start, end)

    if (curPage > 1) {
      isActivePre = false;
    }

    totalsPage = Math.ceil(listUser.length / perPage);
    var pageItems = [];
    for (let item = 1; item <= totalsPage; item++) {
      pageItems.push(
        <Pagination.Item onClick={() => this.onChangePage(item)} key={item} active={item === curPage}>{item <= 5 ? item : <Pagination.Ellipsis />} </Pagination.Item>
      )
    }

    if (curPage >= totalsPage) {
      isActiveNext = true;
    }
    const pagination = (
      <Pagination
        size="sm"
        bsprefix="pagination"
        style={{ marginLeft: '60%' }}
      >
        <Pagination.First disabled={isActivePre} onClick={this.prePage} />
        <Pagination.Prev disabled={isActivePre} onClick={this.prePage} />
        {pageItems}
        <Pagination.Next disabled={isActiveNext} onClick={this.nextPage} />
        <Pagination.Last disabled={isActiveNext} onClick={this.nextPage} />
      </Pagination>
    )

    return (
      <div className="content">
        <Grid fluid>
          <Button style={{ margin: '5px', marginLeft: '90%' }}
            className="pull-right" bsStyle="info" bsSize="small"
          >
            <Link to="/insert" >Add New</Link>
          </Button>
          <Row>
            <Col md={12}>
              <Card
                title="List User"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <Table striped hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>FullName</th>
                          <th>Email</th>
                          <th>Salary</th>
                          <th>City</th>
                          <th>Country</th>
                        </tr>
                      </thead>
                      {listRender}
                    </Table>
                    {pagination}
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

const mapStateToProps = (state) => {
  return {
    userState: state.userReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: (data) => {
      dispatch(action.getAllusers(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
