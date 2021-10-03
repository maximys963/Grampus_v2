import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

import styles from './Analytics.module.sass';

function Analytics() {
  const lineChart = useRef();
  const pieChart = useRef();

  useEffect(() => {
    const customLineChartRef = lineChart.current.getContext('2d');
    const customPieChartRef = pieChart.current.getContext('2d');

    new Chart(customLineChartRef, {
      type: 'line',
      data: {
        labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
        datasets: [
          {
            label: 'Points growth',
            data: [20, 5, 10, 40, 0, 0, 35],
            fill: false,
            borderColor: '#5fb4fd',
            tension: 0.1,
          },
        ],
      },
    });

    new Chart(customPieChartRef, {
      type: 'doughnut',
      data: {
        labels: ['Comes to work always on time', 'Dresses very well', 'Responsible', 'Performs tasks on time', 'Learns quickly'],
        datasets: [
          {
            label: 'Points growth',
            data: [5, 10, 35, 20, 30],
            backgroundColor: ['#48dbfb', '#54a0ff', '#00d2d3', '#1dd1a1', '#feca57'],
            tension: 0.1,
          },
        ],
      },
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.analytics_body}>
        <h3 className={styles.title}>Points growth</h3>
        <div>
          <canvas ref={lineChart} />
        </div>
        <h3 className={styles.title}>Ratio of personal qualities</h3>
        <div>
          <canvas ref={pieChart} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
