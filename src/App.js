import React, {Component} from 'react';
//
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from './components'; // it works, cause in components/index.js I export default as {name} and now I just imported stuff from ./components(index is in default option), just as above
import styles from './App.module.css';  //imported basic styles
import {fetchData} from "./api";    // function to get data

class App extends Component {
    //creating the state to be able to using data from fetchData in files Cards, CountryPicker etc, state is something like constructor
    state = {
        data: {},   //created empty object to populate later, when we call the function to get api data

    };

    async componentDidMount() {
        const featchedData = await fetchData();
        this.setState({data: featchedData}); //here we populate the data object
    }
//call the function to get data from api before render in way as above
    render() {
        const {data} = this.state; //getting the data from state to be able to get it through props in classes below
    return (
        <div className={styles.container}>
          <Cards data={data}/>
          <CountryPicker />
          <Chart />
        </div>
    )
  }
}

// used styles.container, because I'm using modules in css files --- instead of just className="container"














export default App;
