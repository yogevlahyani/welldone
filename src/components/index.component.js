import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { fetch, del } from '../actions/category';

// Components
import AddCategory from './add-category.component.js';
import CategoryList from './category-list.component';

// Styles
import styles from './index.component.css';

class IndexRoute extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetch();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <AddCategory />
                <CategoryList { ...this.props } />
            </div>
        );
    }

}

IndexRoute.defaultProps = {
	categories: [{}]
};

IndexRoute.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (store) => {
	return {
        categories: store.categories
    };
}

const mapDispatchToProps = dispatch => {
	return {
        actions: {
            fetch: () => dispatch(fetch()),
            del: (index) => dispatch(del(index))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);