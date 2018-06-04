import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


// Redux
import { connect } from 'react-redux';
import { add, fetch } from '../actions/location';


class AddLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            address: null,
            lat: 0,
            lng: 0,
            category: '',
            errors: [false, false, false, false, false],
            open: false
        }
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleErrors = () => {
        const { name, address, lat, lng, category } = this.state;
        let errors = [false, false, false, false, false];
        errors[0] = _.isEmpty(name);
        errors[1] = _.isEmpty(address);
        errors[2] = _.isEmpty(lat);
        errors[3] = _.isEmpty(lng);
        errors[4] = _.isEmpty(category);

        this.setState({ errors });

        return _.every(errors, (e) => e === false);
    }

    addLocation = () => {
        const { name, address, lat, lng, category, errors } = this.state;
        const coordinates = [lat, lng];
        const location = { name, address, coordinates, category };

        if (this.handleErrors()) {
            this.props.actions.add(location);
        }
    }

    toggleSelection = () => {
        this.setState({
            open: !this.state.open
        });
    }

    renderCategories = () => {
        const { categories } = this.props;
        
        return categories.map(cat => {
            const category = JSON.stringify(cat);
            return (
                <MenuItem value={ cat.name } key={ cat.id }>{ cat.name }</MenuItem>
            );
        });
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <h1>Add Location</h1>
                <Input
                    placeholder="Name"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={ (e) => this.handleChange('name', e) }
                    error={ errors[0] }
                />
                <br />
                <Input
                    placeholder="Address"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={ (e) => this.handleChange('address', e) }
                    error={ errors[1] }
                />
                <br />
                <br />
                <strong>Coordinates</strong>
                <br />
                <Input
                    placeholder="Lat"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={ (e) => this.handleChange('lat', e) }
                    error={ errors[2] }
                />
                <br />
                <Input
                    placeholder="Lng"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={ (e) => this.handleChange('lng', e) }
                    error={ errors[3] }
                />
                <br />
                <form autoComplete="off">
                    <Button onClick={this.toggleSelection}>
                        Choose category
                    </Button>
                    <FormControl>
                    <Select
                        open={this.state.open}
                        onClose={ () => this.setState({ open: false }) }
                        onOpen={ () => this.setState({ open: true }) }
                        value={ this.state.category }
                        onChange={ (e) => this.handleChange('category', e) }
                        inputProps={{
                            name: 'category',
                            id: 'controlled-open-select',
                        }}
                        error={ errors[4] }
                    >
                        { this.renderCategories() }
                    </Select>
                    </FormControl>
                </form>
                <Button onClick={this.addLocation}>Add!</Button>
            </div>
          );
    }
}

AddLocation.defaultProps = {
    categories: []
}

AddLocation.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (store) => {
	return {
        categories: store.categories
    };
}

const mapDispatchToProps = dispatch => {
	return {
		actions: {
            add: (data) => dispatch(add(data))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);