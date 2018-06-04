import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MainDrawer from './drawer.component';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    toggleDrawer = () => {
        this.refs.drawer.toggleDrawer(true);
    }

    render() {
        return (
            <div>
              <AppBar position="static">
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit">
                    myLocations - Welldone Assignment.
                  </Typography>
                </Toolbar>
              </AppBar>
              <MainDrawer ref="drawer" />
            </div>
          );
    }
}