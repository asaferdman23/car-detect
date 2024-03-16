import { Doughnut } from 'react-chartjs-2';

function GateStatistics(data,options) {
    return(
        <Doughnut data={data} options={options} />
    );
}

export default GateStatistics;