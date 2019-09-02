import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroBanner from './Banners/HeroBanner.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userAgent: 'desktop'
    }
  }

  toggleUserAgent = () => {
    console.log("fires every time we click the user agent toggle button")
    // find my user agent
    if (this.state.userAgent === 'iphone')
      this.setState({userAgent: 'desktop'})
    else
      this.setState({userAgent: 'iphone'})
  }

  // Fetch DATA!!!!!!!
  componentDidMount() {
    console.log('this gets called on page load.')
  }

  render() {
    console.log('this updated every time props or state mutates')
    return (
      <div className="App">
        <button onClick={this.toggleUserAgent}>Toggle User Agent</button>
        {
          this.state.userAgent === 'desktop' &&
          <HeroBanner title="Computer" color="green" />
        }
        
        {
          this.state.userAgent === 'iphone' &&
            <HeroBanner title="Iphone" color= "blue" />
        }
      </div>
    );
  }
}

// export default App;
