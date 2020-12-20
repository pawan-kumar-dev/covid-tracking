import { Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'

const useStyles = makeStyles({
  container: {
    margin: '50px 0',
  },
  cards: {
    margin: '0 2%',
    '&.infected': {
      borderBottom: '10px solid rgba(0,0,255,0.5)',
    },
    '&.recovered': {
      borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    '&.deaths': {
      borderBottom: '10px solid rgba(255,0,0,0.5)',
    },
  },
})
const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {confirmed && recovered && deaths && lastUpdate && (
        <Grid container justify="center">
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={`${classes.cards} infected`}
          >
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">Number of Confirmed cases</Typography>
          </Grid>
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={`${classes.cards} recovered`}
          >
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">Number of Recovered cases</Typography>
          </Grid>
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={`${classes.cards} deaths`}
          >
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">Number of Deaths.</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default Cards
