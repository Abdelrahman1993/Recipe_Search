import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Recipes from './components/Recipes';
const API_KEY="21ff0f82daa706fcedfb7aae612f013a";

class App extends Component {
  
  state ={
    recipes:[],
  }

  getRecipe = async (e)=>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_link = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`;
    const api_call = await fetch(api_link);
    const api_data = await api_call.json();
    this.setState({recipes: api_data.recipes});
    console.log(this.state.recipes);  
  }

  componentDidMount = ()=>{
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    if(recipes !== null && recipes!==undefined)
      this.setState({recipes});
  }
  componentDidUpdate = ()=>{
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }


  render() {
    return (
      <div>
        <Navbar />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;