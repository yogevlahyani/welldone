// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Styles
import styles from './App.css';

// Components
import Footer from './components/common/footer.component';
import Header from './components/common/header.component';

class App extends Component {
  
  renderRoutes = (routes = []) => {

	let rendered = [];

    _.each(routes, (route, i) => {
	  const component = route.component;
	  
		rendered.push(
			<Route exact path={ route.path } component={ component } key={i} />
		);
    });

    return rendered;
  }

	render() {
		return (
			<div className={styles.main}>
				<Router>
					<div>
						<Route path="/" component={ Header } />
						{ this.renderRoutes(this.props.routes) }
						<Route path="/" component={ Footer } />
					</div>
				</Router>
			</div>
		);
	}

}

App.defaultProps = {
	routes: []
};

App.propTypes = {
	routes: PropTypes.array
};

const mapStateToProps = () => {
	return {};
}

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);