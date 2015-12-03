import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Explore from '../components/Explore';
import { resetErrorMessage } from '../actions';
import { Route, Link } from 'react-router';

import Head from '../components/Header'

import navStyle from '../css/leftNav.css';

import ReactCSSTransitionGroup from 'react-addons-transition-group';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    this.props.pushState(null, `/${nextValue}`);
  }

  getLeftClass(){
    return {
      background:'#000',
      top:0,
      left:0,
      color:'#555',
      textAlien:'center',
      width:120,
      position:'absolute',
      height:'100%'
    }
  }

  getContainerClass(){
     return{
        height:'100%',
        marginLeft:113,
        top:-8,
        marginRight:-8,
        position:'relative'
     }
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <p className={{width:150,background:'#555'}}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    );
  }

  render() {
   const links =[{
    name:"首页",
    link: '/'
   },{
    name: '待上架',
    link: '/applist'
   },{
    name: '已上架',
    link: '/release'
   }].map(l =>
      <p>
        <Link style={{textDecoration:'none'}} to={l['link']}>{l['name']}</Link>
      </p>
    );

    return (
      <div>
        <div className={navStyle.nav}>
          <div className={navStyle.navContainer}>
            {links}
          </div>
        </div>
        <div style={this.getContainerClass()}>
          <Head />
          <div>
            <ReactCSSTransitionGroup transitionName="example">
               {this.props.children}
            </ReactCSSTransitionGroup>
          </div>
        </div>
        
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App);
