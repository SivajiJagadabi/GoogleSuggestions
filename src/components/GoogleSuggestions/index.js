// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-container">
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                className="search-box"
              />
            </div>
            <ul className="suggestion-item">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionItem={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
