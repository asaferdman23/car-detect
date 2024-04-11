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
      colors: ['#1976d2'],
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
          fillColors: ['#1976d2']
        }
      }
    },
  });

  useEffect(() => {
      const currentData = data;
      console.log("Log of data from parent ", currentData);
  
      const seriesData = currentData.map(item => {
        let expectedValue;
        let color;
        switch (item.sensor) {
            case 'Temp':
                expectedValue = 70; // replace with expected value for Temp
                break;
            case 'RH':
                expectedValue = 50; // replace with expected value for RH
                break;
            // add more cases for other sensors
            default:
                expectedValue = parseFloat(item.value) * 1.1;
        }
  
        return {
            x: item.sensor,
            y: parseFloat(item.value),
            color: color,
            goals: [
                {
                    name: 'Expected',
                    value: expectedValue,
                    strokeWidth: 10,
                    strokeHeight: 10,
                    strokeColor: '#000000'
                }
            ]
        };
    });
    
    console.log("Log of seriesData", seriesData);
  
      setChartData(prevState => ({
        ...prevState,
        series: [{ name: 'Actual', data: seriesData }]
      }));
    }, [data]);

  return (
    <div>
      <div id="sensors-apex-chart">
        <h1 className='h1-class-chart'>Sensors location: {dummyData.location}</h1>
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={600} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SensorApexChart;
