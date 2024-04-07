import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const dummyData = {
  location: "Halo_Sensor_Toha",
  Temp: 70.1,
  RH: 47.9,
  Lux: 2003.4,
  TVOC: 193,
  "CO2eq": 583,
  "PM2.5": 0,
  "PM10": 0,
  NH3: 0,
  NO2: 10.4,
  CO: 0.45,
  Noise: 52.5,
  Move: 16,
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
      colors: ['#ff0000','#1976d2','#ff0000','#ff0000','#ff0000', '#1976d2','#1976d2','#1976d2','#1976d2','#1976d2','#ff0000','#ff0000','#1976d2'],
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
          fillColors: ['#1976d2', '#000000']
        }
      }
    },
  });

  useEffect(() => {
    // Use the provided data prop or fallback to dummyData
    const currentData = data || dummyData;

    // Transform the data into series format for the chart
    const seriesData = Object.entries(currentData).map(([sensor, value]) => {
      return {
        x: sensor,
        y: parseFloat(value), // Ensuring value is a float
        goals: [
          {
            name: 'Expected',
            value: parseFloat(value) * 1.1, // Adjust this logic as necessary
            strokeWidth: 5,
            strokeHeight: 10,
            strokeColor: '#775DD0'
          }
        ]
      };
    });

    setChartData(prevState => ({
      ...prevState,
      series: [{ name: 'Actual', data: seriesData }]
    }));
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
