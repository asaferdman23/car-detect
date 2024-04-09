import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const dummyData = {
  location: "Halo_Sensor_Toha",
  Temp: 70.1,
  RH: 80,
  Lux: 23.4,
  TVOC: 193,
  "CO2eq": 50,
  "PM2.5": 0,
  "PM10": 0,
  NH3: 0,
  NO2: 10.4,
  CO: 0.45,
  Noise: 40,
  Move: 0,
  AQI: 4,
};

const SensorApexChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        }
      },
      colors: ['#1976d2','#ff0000','#ff0000','#ff0000','#ff0000'],
      dataLabels: {
        formatter: function(val, opt) {
          const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
          if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
          }
          return val;
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Total'],
        markers: {
          fillColors: ['#1976d2', '#000000', '#000000', '#000000']
        }
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // Use the provided data prop or fallback to dummyData
      const currentData = data;
      console.log("Log of data from parent ", currentData);
  
      const seriesData = Object.entries(currentData)
        .filter(([key]) => key !== 'location') // Exclude 'location' key
        .map(([key, value]) => {
          let expectedValue;
          switch (key) {
            case 'Temp':
              expectedValue = parseFloat(value) * 1;
              break;
            case 'RH':
              expectedValue = parseFloat(value) /1.5;
              break;
              case 'Move':
              expectedValue = parseFloat(value) / 2;
              break;
              case 'TVOC':
              expectedValue = parseFloat(value) / 2;
              break;
              case 'Lux':
              expectedValue = parseFloat(value) / 2;
              break;              
              case 'CO2eq':
              expectedValue = parseFloat(value) / 2;
              break;
            // Add more cases as needed
            default:
              expectedValue = parseFloat(value) * 1.1;
          }
  
          return {
            x: key,
            y: parseFloat(value), // Convert to float, assuming all other values are numeric
            goals: [
              {
                name: 'Expected',
                value: expectedValue,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#000000'
              }
            ]
          };
        });
  
      console.log("Log of seriesData",seriesData);
  
      setChartData(prevState => ({
        ...prevState,
        series: [{ name: 'Actual', data: seriesData }]
      }));
    }, 2000); // Delay of 2 seconds
  
    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div>
      <div id="sensors-apex-chart">
        <h1 className='h1-class-chart'>Sensors location: {dummyData.location}</h1>
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SensorApexChart;
