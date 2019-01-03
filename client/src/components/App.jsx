import React from 'react';
import Row1 from './Row1.jsx';
import Row2 from './Row2.jsx';
import AllAmenities from './AllAmenities.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      essential: [],
      special: []
    }
  }

  handleShowAll() {
    document.getElementById('all_amenities').style.display = "block"
    document.getElementById('amenities_container').style.display = "none"
  } 
  handleGoBack() {
    document.getElementById('all_amenities').style.display = "none"
    document.getElementById('amenities_container').style.display = "block"
  }

  componentDidMount() {
    fetch('http://localhost:4002/' + this.props.id + '/amenities')
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
      <section>
        <div id="amenities_container">
          <h1>Amenities</h1>
          <Row1 amenities={this.state.special}/>
          <Row2 amenities={this.state.essential}/>
          <button className="show_all" onClick={this.handleShowAll.bind(this)}>Show all {this.state.amenities.length} amenities</button>
        </div>
      <AllAmenities 
        handleGoBack={this.handleGoBack.bind(this)}
        essential={this.state.essential}
        special={this.state.special}
      />
      </section>
    )
  }
}

export default App;