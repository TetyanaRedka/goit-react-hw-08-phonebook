import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';

const PublicRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
  <Route {...routeProps} render={props => (isAuthenticated && routeProps.restricted ? <Redirect to="/contacts" /> : <Component {...props} />)} />
);

const mapStateToProps = state => ({
  isAuthenticated: getUserAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
