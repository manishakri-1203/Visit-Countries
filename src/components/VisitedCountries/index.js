import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitedCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onRemove = () => {
    deleteVisitedCountry(id)
  }
  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="details-container">
        <p className="visited-country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
