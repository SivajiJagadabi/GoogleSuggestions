// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearchInput} = props
  const {suggestion} = suggestionItem

  const onUpdateSearchInput = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item-container">
      <p>{suggestion}</p>

      {/* <button  type="button"> */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onUpdateSearchInput}
      />
      {/* </button> */}
    </li>
  )
}

export default SuggestionItem
