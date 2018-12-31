import React from 'react';
import Row1 from './Row1.jsx';
import Row2 from './Row2.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      essential: [],
      special: []
    }
  }

  componentDidMount() {
    fetch('/api/listing/' + this.props.id + '/amenities')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var essentialAmenity = []
        var specialAmenity = []

        for (var i = 0; i < data.length; i++) {
          if (data[i].amenity_type === 'essential') {
            essentialAmenity.push(data[i]);
          } else {
            specialAmenity.push(data[i])
          };
        }
        this.setState({
          amenities: data,
          essential: essentialAmenity,
          special: specialAmenity 
        })
      })
  }

  render() {  
    console.log(this.state.amenities)
    console.log(this.state.special)
    console.log(this.state.essential)
    return (
      <div>
        <h1>Amenities</h1>
        <Row1 amenities={this.state.special}/>
        <Row2 amenities={this.state.essential}/>
        <button>Show all {this.state.amenities.length} amenities</button>
      </div>
    )
  }
}

export default App;