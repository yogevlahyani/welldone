import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


export default class CategoryList extends Component {

    renderCategories = () => {
      const { categories } = this.props;
      return categories.map(cat => {
        const title = '#' + cat.id + ' - ' + cat.name;
        return (
          <ListItem key={cat.id}>
            <ListItemText primary={title} />
          </ListItem>
        ) ;
      });
    }

    render() {
        const { categories } = this.props;
        if (categories.length <= 0) { return null; }

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

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};