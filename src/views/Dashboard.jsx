
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Line, Bar } from 'react-chartjs-2';
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import CountUp from 'react-countup';
import * as url from './../ultils/URL';
import axios from 'axios';
import { FormControl, NativeSelect } from '@material-ui/core';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infected: 0,
      recovered: 0,
      deaths: 0,
      lastUpdate: null,
      dailyData: [],
      listContries: [],
      country: '',
    }
  }

  componentDidMount() {
    this.getListDataCovid();
    this.getDailyData();
    this.getAllCountries();
  }

  async getListDataCovid() {
    const response = await axios({
      method: 'GET',
      url: url.COVID_API
    });
    try {
      var data = await response.data;
      var confirmed = await data.confirmed;
      var recovered = await data.recovered;
      var deaths = await data.deaths;
      this.setState({
        infected: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: data.lastUpdate.split('T')[0]
      })
    } catch (error) {
      console.error(error);
    }
  }

  async getDailyData() {
    const response = await axios({
      method: 'GET',
      url: url.DAILY_API
    });
    try {
      var listData = [];
      var data = await response.data;
      data.map((ele) => {
        return listData.push(ele)
      })
      this.setState({
        dailyData: listData
      })
    } catch (error) {
      console.error(error)
    }
  }

  async getAllCountries() {
    const response = await axios({
      method: 'GET',
      url: url.COUNTRY_API
    });
    try {
      var data = await response.data.countries;
      this.setState({
        listContries: data
      })
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidUpdate() {
    var { country } = this.state;
    var urlAPI = url.COUNTRY_API + `${country}`;
    if (country === 'Global') {
      urlAPI = url.COVID_API;
    }
    const response = await axios({
      method: 'GET',
      url: urlAPI
    });
    try {
      var data = await response.data;
      var infected = await data.confirmed.value;
      var recovered = await data.recovered.value;
      var deaths = await data.deaths.value
      this.setState({
        infected: infected,
        recovered: recovered,
        deaths: deaths
      })
    } catch (error) {
      console.error(error);
    }
  }

  onChangeValue = (e) => {
    this.setState({
      country: e.target.value
    })
  }
  render() {
    const { infected, recovered, deaths, lastUpdate, dailyData, listContries, country } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-virus" />}
                statsText="Infected"
                statsValue={
                  <CountUp
                    start={0}
                    end={infected}
                    duration={3}
                    separator=","
                  />
                }
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={lastUpdate}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fab fa-accessible-icon" />}
                statsText="Recovered"
                statsValue={
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.5}
                    separator=","
                  />
                }
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={lastUpdate}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-skull-crossbones" />}
                statsText="Deaths"
                statsValue={
                  <CountUp
                    start={0}
                    end={deaths}
                    duration={2.5}
                    separator=","
                  />
                }
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={lastUpdate}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-facebook" />}
                statsText="Facebook"
                statsValue={5000}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={lastUpdate}
              />
            </Col>
          </Row>

          <Row>
            <div className="select-country" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ margin: '10px', fontSize: '20px' }}>Select Country</h3>
              <FormControl style={{ width: '20%' }}>
                <NativeSelect onChange={this.onChangeValue}>
                  <option defaultValue='Global'>Global</option>
                  {listContries.map((country, index) =>
                    <option key={index} value={country.name}>{country.name}</option>
                  )}
                </NativeSelect>
              </FormControl>
            </div>
          </Row>

          <Row>
            <div style={{ width: '80%', marginLeft: '100px' }}>
              {(country === '' || country === 'Global') ? (<Line
                data={{
                  labels: dailyData.map(obj => obj.reportDate),
                  datasets: [
                    {
                      data: dailyData.map(({ confirmed }) => confirmed.total),
                      label: 'Infected',
                      borderColor: 'red',
                      backgroundColor: '#6E92EF',
                      fill: true
                    }, {
                      data: dailyData.map(({ deaths }) => deaths.total),
                      label: 'Deaths',
                      borderColor: 'blue',
                      backgroundColor: '#74EB3C',
                      fill: true
                    }
                  ],
                }}
              />) : (
                  <Bar
                    data={{
                      labels: ['Infected', 'Recovered', 'Deaths'],
                      datasets: [{
                        label: 'People',
                        backgroundColor: [
                          '#C3EF15', '#1538EF', '#C56C77'
                        ],
                        data: [
                          infected, recovered, deaths
                        ]
                      },
                      ]
                    }}

                    options={{
                      legend: { display: false },
                      title: { display: true, text: `Current state in ${country}` }
                    }}

                  />
                )}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
