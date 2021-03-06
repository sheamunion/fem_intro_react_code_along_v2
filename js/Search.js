import React from 'react'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>Cool Videoz</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default Search
