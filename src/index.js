import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor(props) {
    super(props)
    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
    this.state = { lat: null, errorMessage: '' }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  // React says we have ti define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>loading...</div>
  }
}

export default App

ReactDOM.render(<App />, document.querySelector('#root'))
