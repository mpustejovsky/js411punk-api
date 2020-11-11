import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BeerComponent from './beerComponent';
import BeerDetails from './beerDetails';

class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      data: [
        {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1044,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 75,
        "volume": {
        "value": 20,
        "unit": "litres"
        },"food_pairing": [
          "Spicy chicken tikka masala",
          "Grilled chicken quesadilla",
          "Caramel toffee cake"
          ],
        
        "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
        }],
        beerDisplay : {
          "id": 1,
          "name": "Buzz",
          "tagline": "A Real Bitter Experience.",
          "first_brewed": "09/2007",
          "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
          "image_url": "https://images.punkapi.com/v2/keg.png",
          "abv": 4.5,
          "ibu": 60,
          "target_fg": 1010,
          "target_og": 1044,
          "ebc": 20,
          "srm": 10,
          "ph": 4.4,
          "attenuation_level": 75,
          "volume": {
          "value": 20,
          "unit": "litres"
          },"food_pairing": [
            "Spicy chicken tikka masala",
            "Grilled chicken quesadilla",
            "Caramel toffee cake"
            ],}
    };
  }
 
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
 
  handleBeerDetails = (index) =>{
    const test = this.state.data[0]
    this.setState({beerDisplay:this.state.data[index]
    })
    
  }

  handleLike = (index) =>{
    let classnameThumb = document.getElementById('thumb'+index).className
      if (classnameThumb == "fa fa-thumbs-down"){
        document.getElementById('thumb'+index).className="fa fa-thumbs-up"}
      else
      document.getElementById('thumb'+index).className="fa fa-thumbs-down";
    {console.log("handle like")}
  }
 
  render(){
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Punk API
        </p>
        {console.log("data is equal to",this.state.data)}
       
      </header>
      <div id="container">  
      <div id="top">
      </div>
      <div id="left">
      <BeerComponent items={this.state.data} handleBeerDetails={this.handleBeerDetails} handleLike={this.handleLike}/>
      
      </div>
      <div id="right" class="sub_area">
        <BeerDetails details={this.state.beerDisplay}/>
      </div>
      </div>
    </div>
  );
}}

export default App;
