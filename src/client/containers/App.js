import React from 'react'

import Home from '../components/Home'
import Writings from '../components/Writings'
import Projects from '../components/Projects'

const ROUTES = {
  home: '/',
  writings: '/writings',
  projects: '/projects'
}

export default React.createClass({
  getInitialState() {
    return {
      currentRoute: null
    };
  },

  componentDidMount() {
    const path = window.location.pathname;
    this.setState({ currentRoute: path });
  },

  render() {
    return (
      <div className='container'>
        <div className='nav'>
          {this.renderBackButton()}
        </div>

        <div className='main-content'>
          {this.renderChild()}
        </div>
      </div>
    )
  },

  transitionTo(route) {
    this.setState({ currentRoute: route });
  },

  // home icons navigate to respective routes
  // back button always goes back to home
  renderChild() {
    switch (this.state.currentRoute) {
      case ROUTES.home:
        return <Home transitionTo={this.transitionTo} />
        break
      case ROUTES.writings:
        return <Writings />
        break
      case ROUTES.projects:
        return <Projects />
        break
      default:
        return <Home transitionTo={this.transitionTo} />
    }
  },

  renderBackButton() {
    if (this.state.currentRoute === '/') {
      return null
    }

    return (
      <div onClick={() => this.transitionTo('/')} className='nav-back'>
        <div className='nav-back-icon' />
      </div>
    )
  }
})
