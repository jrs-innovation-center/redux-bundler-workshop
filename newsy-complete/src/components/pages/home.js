import React from 'react'
import { connect } from 'redux-bundler-react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { map } from 'ramda'

const styles = theme => ({
  root: {
    marginTop: '56px',
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  card: {
    minWidth: 275
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const li = doUpdateUrl => article => (
  <ListItem
    key={article.url}
    button
    onClick={() => (window.location = article.url)}
  >
    <Avatar>TC</Avatar>
    <ListItemText primary={article.title} secondary={article.publishedAt} />
  </ListItem>
)

class Home extends React.Component {
  state = { name: '' }
  handleChange = field => {
    return e => {
      this.setState({ name: e.target.value })
    }
  }
  render() {
    const { classes, articles, doUpdateUrl, doSearchNews } = this.props

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="search"
              label="Search"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <Button onClick={() => doSearchNews(this.state.name)}>
              Search
            </Button>
          </CardContent>
        </Card>
        {articles ? (
          <List>{map(li(doUpdateUrl), articles)}</List>
        ) : (
          <div className={classes.root}>
            <h1 style={{ paddingHorizontal: '16px' }}>
              Enter a news topic and click search to get latest articles
            </h1>
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(
  connect('selectArticles', 'doUpdateUrl', 'doSearchNews', Home)
)
