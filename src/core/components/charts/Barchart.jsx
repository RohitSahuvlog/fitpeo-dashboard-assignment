import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '',
      data: [45, 20, 60, 50, 46, 100, 78, 135, 90, 50, 50, 50],
      backgroundColor: [
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#4338ca',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',
        '#eef2ff',

      ],
      borderWidth: 1,
      borderRadius: 10
    }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: '',
    },
    label: {

    },
    datasets: {
      display: false
    }

  },
  scales: {
    x: {
      border: {
        display: false
      },
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
    }
  },
  elements: {
    bar: {
      border: false,
      borderSkipped: 'bottom'
    }
  }
};


const Barchart = () => {
  const [chartData, setChartData] = useState(data);
  return (
    <Bar options={options} data={chartData} />
  )
}

export default Barchart