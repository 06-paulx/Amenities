import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: []
    }
  }

  componentDidMount() {
    fetch('/api/listing/' + this.props.id + '/amenities')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          amenities: data
        })
      })
  }

  render() {  
    console.log(this.state.amenities)
    return (
      <div>
        <h1>Amenities</h1>
        <button>Show all amenities</button>
      </div>
    )
  }
}

export default App;