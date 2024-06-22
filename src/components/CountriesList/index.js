import './index.css'

const CountriesList = props => {
  const {countryDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countryDetails

  const addCountry = () => {
    addVisitedCountry(id)
  }

  const countryText = isVisited ? 'Visited' : 'Visit'
  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="visited-text">{countryText}</p>
      ) : (
        <button type="button" className="visit-button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
