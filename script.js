const ctx = document.getElementById("myChart");
const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 270);
gradient.addColorStop(0, "rgba(203,0,235,1)");
gradient.addColorStop(1, "rgba(203,0,235,0)");

let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily tasks",
        data: [5, 7, 8, 4, 6, 5, 2],
        fill: true,
        borderColor: "rgb(203, 0, 235)",
        backgroundColor: gradient,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 9,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Weekly Activity",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
  },
});
const ctxx = document.getElementById("myPieChart");
let myPieChart = new Chart(ctxx, {
  type: "doughnut",
  data: {
    labels: ["Work", "Home", "Lifestyle"],
    datasets: [
      {
        data: [18, 5, 7],
        backgroundColor: [
          "rgb(103, 59, 235)",
          "rgb(138, 227, 168)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});
