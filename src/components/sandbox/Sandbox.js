import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Chart from "react-apexcharts";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  document: {
    padding: theme.spacing(4, 5)
  },
  loginPanel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between'
  }
}));
const responseFacebook = (response) => {
  console.log(response);
}
const responseGoogle = (response) => {
  console.log(response);
}

function Sandbox(props) {
  const classes = useStyles();
  const [fblogin, setFblogin] = useState(false);
  const [googlogin, setGooglogin] = useState(false);
  const [chart, setChart] = useState({
    seriesCandle: [{
      data: props.snapshot.seriesData
    }],
    seriesBar: [{
      name: 'volume',
      data: props.snapshot.seriesDataLinear
    }],
    chartOptionsCandlestick: {
      chart: {
        id: 'candles',
        toolbar: {
          autoSelected: 'pan',
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#3C90EB',
            downward: '#DF7D46'
          }
        }
      },
      xaxis: {
        type: 'datetime'
      }
    },
    chartOptionsBar: {
      chart: {
        height: 160,
        type: 'bar',
        brush: {
          enabled: true,
          target: 'candles'
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('20 Jan 2017').getTime(),
            max: new Date('10 Dec 2017').getTime()
          },
          fill: {
            color: '#ccc',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [{
              from: -1000,
              to: 0,
              color: '#F15B46'
            }, {
              from: 1,
              to: 10000,
              color: '#FEB019'
            }],

          },
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    }
  });
  return (
    <Container className={classes.root} maxWidth="lg">

      <Paper className={classes.document}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.loginPanel}>
              <div style={{marginLeft: '20px'}}><Typography variant="h5" color="textSecondary">Login to activate the graph</Typography></div>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                size="medium"
              />
              <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                size="small"

              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div id="chart-box">
              <div id="chart-candlestick">
                <Chart options={chart.chartOptionsCandlestick} series={chart.seriesCandle} type="candlestick" height="290" />
              </div>
              <div id="chart-bar">
                <Chart options={chart.chartOptionsBar} series={chart.seriesBar} type="bar" height="160" />
              </div>
            </div>
            <div id="html-dist">
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Sandbox