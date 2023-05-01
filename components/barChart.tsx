import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
  // const { data, error } = useSWR(
  //   "http://localhost:3000/api/static-data",
  //   fetcher
  // );

  // if (error) return <div>Failed to load</div>;
  // //Handle the loading state
  // if (!data) return <div>Loading...</div>;

  // console.log(data);

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

  let chartData = {
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
      // const labels = data.map((mdata: any) => mdata.labels);
      console.log(data.name);
    })
    .catch((error) => console.error(error));

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
