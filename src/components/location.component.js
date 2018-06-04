import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { fetch } from '../actions/location';

// Components
import AddLocation from './add-location.component';
import LocationList from './location-list.component';

class LocationRoute extends Component {

    componentDidMount() {
        this.props.actions.fetch();
    }

    render() {

        return (
            <div>
                <AddLocation />
                <LocationList { ...this.props } />
            </div>
        );
    }

}


LocationRoute.defaultProps = {
	locations: [{}]
};

LocationRoute.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (store) => {
	return {
        locations: store.locations
    };
}

const mapDispatchToProps = dispatch => {
	return {
        actions: {
            fetch: () => dispatch(fetch())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationRoute);