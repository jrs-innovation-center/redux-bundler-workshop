import React from 'react'
import navHelper from 'internal-nav-helper'

import { connect } from 'redux-bundler-react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const Layout = ({ route, classes, doUpdateUrl }) => {
  const Page = route
  return (
    <div className={classes.root} onClick={navHelper(doUpdateUrl)}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Newsy
          </Typography>
          <Button color="inherit">Customize</Button>
        </Toolbar>
      </AppBar>
      <Page />
    </div>
  )
}

export default withStyles(styles)(connect('selectRoute', 'doUpdateUrl', Layout))
