import React from 'react'
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Login from './login'
import Signup from './signup'
import Forgot from './forgot'
import Logo from '../logo'

const styles = theme => ({
  container: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
  },
  leftSection: {
    width: '100%',
    background: theme.palette.primary.main
  },
  block: {
    padding: 15
  },
  button: {
    margin: '15px 0'
  },
  linkButton: {
    cursor: 'pointer'
  },
  navigation: {
    position: 'block'
  }
})

class Authenticate extends React.Component {
  state = { nav: 'login' }

  navigate(nav) {
    this.setState({ nav })
  }

  render() {
    let { onSuccess, classes } = this.props
    let { nav } = this.state
    return (
      <Fade in >
        <Grid container className={classes.container} direction="row-reverse" >
          <Grid item xs={12} sm={7}   >
            <Grid container style={{ height: '100%' }} justify="center" alignItems="center" direction="column">

              <Logo className={classes.backgroundLogo} black minimal />
              <div >
                {nav === 'login' && <Fade in={nav === 'login'} unmountOnExit >
                  <div className={classes.navigation}>
                    <Login classes={classes} onSuccess={onSuccess} />
                    <Typography>I think i need to <b onClick={() => this.navigate('create')} className={classes.linkButton} > Create an account</b>. I'm afraid <b onClick={() => this.navigate('forgot')} className={classes.linkButton} >I forgot my password</b></Typography>
                  </div>
                </Fade>}

                {nav === 'create' &&
                  <Fade in={nav === 'create'} unmountOnExit >
                    <div className={classes.navigation}>
                      <Signup classes={classes} onSuccess={onSuccess} />
                      <Typography>Actually I've just remember that <b onClick={() => this.navigate('login')} className={classes.linkButton} > I have an account</b></Typography>
                    </div>
                  </Fade>}

                {nav === 'forgot' && <Fade in={nav === 'forgot'} unmountOnExit >
                  <div className={classes.navigation}>
                    <Forgot classes={classes} />
                    <Typography>Actually I've just remember my account<b onClick={() => this.navigate('login')} className={classes.linkButton} > take me to the login</b></Typography>
                  </div>
                </Fade>}

              </div>
            </Grid>
          </Grid>
          <Grid item className={classes.leftSection} xs={12} sm={5} style={{ height: '100%' }}  >
            <Logo size={120} title />
          </Grid>
        </Grid >
      </Fade>
    )
  }
}

export default withStyles(styles)(Authenticate)