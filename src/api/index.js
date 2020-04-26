import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {

    try {
        //const {data} = .... as above almost
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }
        // created object with the data we need, so from element 'data' we took elements 'confirmed', 'recovered' etc and give their values to variables
        // return modifiedData
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url); //use destructure to get element data from object from response and quick destructure to get elements from data ;)
        return {confirmed, recovered, deaths, lastUpdate}; //quicker and more efficient way
    }
    catch (error) {
        
    }
};

export const fetchDailyData = async () => {
    try {
        const {data}= await axios.get(`${url}/daily`); //get daily dat for a chart so we call it in the chart file
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        //above- getting data we need from whole data and put into object
        return modifiedData
    }catch (error) {
        console.log(error)
    }
};

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`); //get data from countries
        return countries.map((country) => country.name);



    }catch (error) {
        console.log(error)
    }
}
