import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../context/themeContext';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const Graph = ({graphData}) => {
  const {theme} = useTheme()
  const data = {
    labels: graphData.map(i=> i[0]),
    datasets: [
      {
        label: 'WPM',
        data: graphData.map(i=> i[1]),
        fill: false,
        borderColor: theme.typeBoxText,    
      },
      
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Graph;