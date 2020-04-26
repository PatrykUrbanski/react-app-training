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