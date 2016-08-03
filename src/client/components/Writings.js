import React, { PropTypes } from 'react'

const BLOGS = [
  {
    title: 'Drill Baby Drill! Data Exploration in Chronograf',
    url: 'https://influxdata.com/blog/time-series-data-exploration-chronograf/',
    publishedAt: new Date(2015, 11, 15)
  },
  {
    title: 'Difference of Squares: JavaScript for Ruby Developers',
    url: 'https://github.com/wfro/blogs/blob/master/2015_3_25_javascript_for_ruby_developers_difference_of_squares.md',
    publishedAt: new Date(2015, 2, 25)
  },
  {
    title: 'Improve Your Testing workflow with Vim and tmux',
    url: 'https://github.com/wfro/blogs/blob/master/2015_1_27_improve_your_testing_workflow_with_vim_and_tmux.md',
    publishedAt: new Date(2015, 0, 21)
  },
  {
    title: 'First Time Vim Setup 101',
    url: 'https://github.com/wfro/blogs/blob/master/2014_12_18_first_time_vim_setup_101.md',
    publishedAt: new Date(2014, 11, 18)
  },
  {
    title: 'Video Games, or How I Leanred to Love Keybinds',
    url: 'https://github.com/wfro/blogs/blob/master/2014_11_15_video_games_or_how_i_learned_to_love_keybinds.md',
    publishedAt: new Date(2014, 10, 15)
  },
  {
    title: 'Yet Another Project Euler Blog, Problem 1',
    url: 'https://github.com/wfro/blogs/blob/master/2014_11_05_yet_another_project_euler_blog_problem_1.md',
    publishedAt: new Date(2014, 10, 5)
  },
  {
    title: 'Clojure Workshop for Posterity',
    url: 'https://github.com/wfro/blogs/blob/master/2014_10_31_clojure_workshop_for_posterity.md',
    publishedAt: new Date(2014, 9, 31)
  }
]

export default React.createClass({
  render() {
    return (
      <ul className='blogs'>
        {BLOGS.map(blog => (
          <li className='blog'>
            {blog.publishedAt.toLocaleDateString()} {'=> '}
            <a href={blog.url}>{blog.title}</a>
          </li>
        ))}
      </ul>
    )
  }
})
