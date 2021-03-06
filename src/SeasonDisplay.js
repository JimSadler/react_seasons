import React from 'react'
import './seasonDisplay.css'

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brrr it is cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat < 0 ? 'winter' : 'summer'
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1 role='presentation'>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  )
}

export default SeasonDisplay
