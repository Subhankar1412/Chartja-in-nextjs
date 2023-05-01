import React, { useState, useEffect } from "react";

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

interface Data {
  name: string;
  labels: string[];
  datasets: {
    label: string;
    data: string;
    backgroundColor: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BarChart() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/static-data")
      .then((response) => response.json())
      .then((data) => {
        const allData = JSON.parse(data);
        setData(allData);
        console.log(allData.datasets);
      })
      .catch((error) => console.error(error));
  }, []);

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

  let chartData = {
    labels: data?.labels || [],
    datasets: data?.datasets || [],
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
