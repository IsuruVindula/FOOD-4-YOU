import React, { Component } from 'react';
import './App.css';
import Recipe from './Components/Recipe';
import {recipes} from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';


class App extends Component{

  state = {
    recipes: recipes,
    url: "copy the api url",
    details_id: 78965,
    pageIndex: 1,
    search: ''
  }

  // async getRecipes(){ //when we click the page , its needs some time to load. So thats why we use async function
  //   try{
  //     const data = await fetch(this.state.url).then((value) =>{console.log(value);}, (error)=>{console.log(error);})
  //     const jasonData = await data.json();
  //     this.setState({recipes:jasonData.recipes})
  //   }catch(error){
  //     console.error(error);
  //   }
  // }

  // componentDidMount(){ //this is a build in method. Executes when app component mount
  //   this.getRecipes();
  // }

  displayPage= (index) => {
    switch(index){
      default:
      case 1:
        return(<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />)
      case 0:
        return(<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>)
    }
  };

  // we use index to chage the rendering content
  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    })
  };

  // we pass this method to recipeList
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  };

  handleChange = (e)=>{
    console.log("hello from habdle change");

  }

  handleSubmit = (e)=> {
    e.preventDefault();
    console.log("Hello from handle submit");
  }


  render() {
    return(
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    )
  }
}



export default App;
