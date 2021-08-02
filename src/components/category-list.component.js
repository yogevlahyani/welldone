import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { Animated } from "react-animated-css";


export default class CategoryList extends Component {

    deleteCategory = (index) => {
      this.props.actions.del(index);
    }

    renderCategories = () => {
      const { categories } = this.props;
      return categories.map((cat, i) => {
        if (!cat) {
          return null;
        }

        const title = '#' + (i) + ' - ' + cat.name;
        return (
          <ListItem key={i}>
            <ListItemText primary={title} />
            <Animated animationIn="shake" animationOut="shake" isVisible={true}>
              <Button onClick={ () => this.deleteCategory(i) }>
                <CloseIcon />
              </Button>
            </Animated>
          </ListItem>
        ) ;
      });
    }

    render() {
        const { categories } = this.props;
        if (!categories || categories.length <= 0) { return null; }

        return (
          <div>
            <h1>Categories:</h1>
            <List component="nav">
              { this.renderCategories() }
            </List>
          </div>
        );
    }
}

CategoryList.defaultProps = {
  categories: [],
  actions: {}
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object
};