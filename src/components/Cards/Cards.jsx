import React from 'react';
import { Card, CardContent, Typography, Grid} from "@material-ui/core"; //we installed this library, it helps with web development
import styles from './Cards.module.css'
import CountUp from 'react-countup' //library to make a counting animation
import cx from 'classnames' //module to better deal with class names

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {     //taking the exact elements from data response and put it below with .value
    if (!confirmed) {
        return "Loading...."            //if there is no data yet do not do the code below
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={10} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={10} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={10} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards