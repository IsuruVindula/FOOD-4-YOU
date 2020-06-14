import React,{ Component } from "react";

export default class ReciepResearch extends Component{
    render(){
        const{value, handleChange, handleSubmit} = this.props
        return(
       <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                    <h1 className="text-slanted text-capitalized">Search for recipe with <strong className="text-danger">Food2Fork</strong></h1>
                    <form className="mt-4" className="text-capitalized" onSubmit={handleSubmit}>
                        <label htmlFor="search">type recipes separated by comma</label>
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Chicken,onions,carrots" className="form-control" value={value} onChange={handleChange} />
                            <div className="input-group-append">
                                <button type="submit" className="input-group-text bg-bg-primary text-white">
                                    <i className="fas fas-search" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </React.Fragment>
        )
    }
}