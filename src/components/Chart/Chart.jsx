import React, {useState, useEffect} from 'react'; //some stuff from libraries I dont know yet // Hooks
import { fetchDailyData} from "../../api";
import { Line, Bar} from 'react-chartjs-2'; //imported charts types

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]); //created the state for the data, in use State initial value is empty object; it's the same as in app.js but the other method needs class component, that's just another method
    useEffect(() => {
       const fetchAPI = async () => {
           setDailyData(await fetchDailyData());
       };
       fetchAPI()
    });

    const lineChart = (
        dailyData.length !== 0        //it means if dailyData lenght is not 0 so something is in there so data has featched and we can run the code
        ? (
        //made a chart and add data ass an object
        <Line
            data={{
                labels: dailyData.map((({date}) => date)), //get dailyData dates and put as a labels
                datasets: [{
                    data: dailyData.map((({confirmed}) => confirmed)),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true,
                }, {
                    data: dailyData.map((({deaths}) => deaths)),
                    label: "Deaths",
                    borderColor: "#C14242",
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill: true,
            }]
            }}
        />
            ) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
};

export default Chart