import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// import Navigation from './components/Navigation';
import {plantarray} from './plantarray.json';

class App extends Component {
    constructor(){
        super(); //hereda toda la funcionalidad de React
        this.state = {
            plantarray
        }
    }

    render() {
        //recorrer el array
        const plantarray = this.state.plantarray.map((plantarray, i) =>{
            return(
                <div className="card">
                    <div className="card-header">
                        <h3>{plantarray.name}</h3>
                    </div>
                    <div className="card-body">
                    <p>
                        {plantarray.description}
                    </p>
                    <img src= {plantarray.urlimg}></img>
                    </div>
                    
                </div>
            )
        })
            

        return (
            <div className="App">
                
             <nav className="navbar navbar-dark bg-dark">
                 <a href="" className="text-white">
                Plants
                </a>
                <div className='navButtons'>
                    <input type='button' value='Home'></input>
                    <input type='button' className='menu' value='Menu'></input>
                </div>
            </nav>

            {plantarray}
            </div>
        )
    }
}

export default App;