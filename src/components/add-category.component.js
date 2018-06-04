import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';
import { add, fetch } from '../actions/category';


class AddCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            error: false
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addCategory = () => {
        const { name } = this.state;
        if (!_.isEmpty(name)) {
            this.props.actions.add(name);
        } else {
            this.setState({ error: true });
        }
    }

    render() {

        return (
            <div>
                <h1>Add Category</h1>
                <Input
                    placeholder="Name"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={this.handleChange.bind(this)}
                    error={this.state.error}
                />
                <Button onClick={this.addCategory}>Add!</Button>
            </div>
          );
    }
}

const mapStateToProps = () => {
	return {};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: {
            add: (data) => dispatch(add(data))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);