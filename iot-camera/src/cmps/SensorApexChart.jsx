import React, { useState } from 'react';
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
const SensorApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: 'Temp',
            y: 21,
            goals: [
              {
                name: 'Expected',
                value: 20,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'RH',
            y: 47.9,
            goals: [
              {
                name: 'Expected',
                value: 54,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Lux',
            y: 54,
            goals: [
              {
                name: 'Expected',
                value: 52,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'TVOC',
            y: 66,
            goals: [
              {
                name: 'Expected',
                value: 61,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'CO2eq',
            y: 81,
            goals: [
              {
                name: 'Expected',
                value: 66,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'PM2.5',
            y: 0,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },          {
            x: 'PM10',
            y: 0,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'NH3',
            y: 0,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'NO2',
            y: 10.4,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'CO',
            y: 0.45,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'Noise',
            y: 85,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'Move',
            y: 80,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },{
            x: 'AQI',
            y: 67,
            goals: [
              {
                name: 'Expected',
                value: 90,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },
        ]
      }
    ],
    // series: [
    //   {
    //     name: 'Actual',
    //     data: [
    //       {
    //         x: 'Temp',
    //         y:  21,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 20,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'RH',
    //         y: 47.9,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },
    //       // {
    //       //   x: 'Lux',
    //       //   y: 2003.4,
    //       //   goals: [
    //       //     {
    //       //       name: 'Total',
    //       //       value: 1000,
    //       //       strokeWidth: 2,
    //       //       strokeDashArray: 2,
    //       //       strokeColor: '#1976d2'
    //       //   }
    //       //   ]
    //       // },
    //       {
    //         x: 'TVOC',
    //         y: 193,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'CO2eq',
    //         y: 583,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'PM2.5',
    //         y: 0,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'PM10',
    //         y: 0,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'NH3',
    //         y: 0,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'NO2',
    //         y: 10.4,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'CO',
    //         y: 0.45,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'Noise',
    //         y: 52.5,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'Move',
    //         y: 16,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },{
    //         x: 'AQI',
    //         y: 4,
    //         goals: [
    //           {
    //             name: 'Total',
    //             value: 1000,
    //             strokeWidth: 2,
    //             strokeDashArray: 2,
    //             strokeColor: '#1976d2'
    //         }
    //         ]
    //       },
    //       // ... Add other data points here
    //     ]
    //   }
    // ],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          
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
          fillColors: ['#1976d2', '#000000']
        }
      }
    },
  });

  return (
    <div>
      <div id="sensors-apex-chart">
      <h1 className='h1-class-chart'>Sensors location : Halo_Sensor_Toha</h1>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={500} width={700} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SensorApexChart;