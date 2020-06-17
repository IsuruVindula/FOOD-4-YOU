import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';


class App extends Component{

  state = {
    recipes: recipes,
    url: "copy the api url",
    base_url:"", //grab the same exact url above and past it here
    details_id: 78965,
    pageIndex: 1,
    search: '',
    query: '&q=',  //this is essential to work api search function. This has defined in API document
    error: ''
  }

  async getRecipes(){ //when we click the page , its needs some time to load. So thats why we use async function
    try{
      const data = await fetch(this.state.url).then((value) =>{console.log(value);}, (error)=>{console.log(error);})
      const jasonData = await data.json();

      if(jasonData.recipes.length === 0){
        this.setState(() =>{
          return {error: 'sorry your recipe does not exists'}
        })
      }
      else{
        this.setState(() => {
          return{recipes: jasonData.recipes}
        })
      }

    }catch(error){
      console.error(error);
    }
  }

  componentDidMount(){ //this is a build in method. Executes when app component mount
    this.getRecipes();
  }

  displayPage= (index) => {
    switch(index){
      default:
      case 1:
        return(<RecipeList recipes={this.state.recipes} error={this.state.error} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />)
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
    this.setState({
      search: e.target.value
    }, () => {
      console.log(this.state.search); //after executing main function callback function gets execute
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    const{base_url, query, search} = this.state;

    this.setState(() => {
      return{url: base_url + query + search ,search: ""};
    }, ()=>{
      this.getRecipes();
    })
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
