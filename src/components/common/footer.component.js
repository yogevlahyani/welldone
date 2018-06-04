import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';

class Footer extends Component {
  state = {
    value: 'categories'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  navigateTo = (path) => {
    this.props.history.push(path);
  }

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} style={styles.footer}>
        <BottomNavigationAction label="Categories" value="categories" icon={<MenuIcon />} onClick={() => this.navigateTo('/')} />
        <BottomNavigationAction label="Locations" value="locations" icon={<LocationOnIcon />} onClick={() => this.navigateTo('/locations')} />
      </BottomNavigation>
    );
  }
}

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }
}

export default Footer;
