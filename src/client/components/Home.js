import React, { PropTypes } from 'react'

export default React.createClass({
  handleClickWritings() {
    this.props.transitionTo('/writings')
  },

  handleClickProjects() {
    this.props.transitionTo('/projects')
  },

  render() {
    return (
      <div className='home-row'>
        <AlbersIcon onClick={this.handleClickWritings} className='home-writings' text='writings' />
        <a href='https://twitter.com/will_faurot'><AlbersIcon className='home-twitter' text='twitter' /></a>
        <a href='https://github.com/wfro'><AlbersIcon className='home-github' text='github' /></a>
      </div>
    )
  },
})

const AlbersIcon = React.createClass({
  propTypes: {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  },

  render() {
    const { className, text } = this.props
    return (
      <div onClick={this.props.onClick} className={`albers ${className}`}>
        <div className='albers--inner-one'>
          <div className='albers--inner-two'>
            <h2>{text}</h2>
          </div>
        </div>
      </div>
    )
  }
})
