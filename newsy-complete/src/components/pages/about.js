import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

const styles = theme => ({
  root: {
    marginTop: '56px',
    padding: '8px'
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class AboutCard extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            title="About Newsy"
            subheader="May 24, 2018"
          />
          <CardMedia
            className={classes.media}
            image="/images/newsy.jpg"
            title="About Newsy"
          />
          <CardContent>
            <Typography component="p">
              Get the news you want your way! Customize your news feed from 100s
              of sources and have the news sent to your phone and always
              available.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(AboutCard)
