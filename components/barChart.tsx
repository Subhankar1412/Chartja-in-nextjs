import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    layout: {
      padding: 50,
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  let data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [70, 60, 50, 40, 30, 20, 10],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  fetch("http://localhost:3000/api/static-data")
    .then((response) => response.json())
    .then((data) => {
      // const labels = data.labels;
      const labelss = data.map((mdata: any) => mdata.labels);
      console.log(labelss);
    })
    .catch((error) => console.error(error));

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
