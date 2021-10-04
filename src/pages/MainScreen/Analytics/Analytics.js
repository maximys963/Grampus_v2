import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

import styles from './Analytics.module.sass';

function Analytics() {
  let lineChart = useRef();
  let pieChart = useRef();
  let performanceChartRef = useRef();

  useEffect(() => {
    const customLineChartRef = lineChart.current.getContext('2d');
    const customPieChartRef = pieChart.current.getContext('2d');
    const createdToPreformedRef = performanceChartRef.current.getContext('2d');

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

    new Chart(createdToPreformedRef, {
      type: 'line',
      data: {
        labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
        datasets: [
          {
            label: 'Created',
            data: [20, 5, 10, 40, 0, 0, 35],
            fill: false,
            borderColor: '#ff6b6b',
            tension: 0.1,
          },
          {
            label: 'Performed',
            data: [10, 30, 15, 5, 4, 10, 10],
            fill: false,
            borderColor: '#1dd1a1',
            tension: 0.1,
          },
        ],
      },
    });

    return () => {
      lineChart = null;
      pieChart = null;
      performanceChartRef = null;
    };
  }, []);

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
        <h3 className={styles.title}>Created/Performed tasks</h3>
        <div>
          <canvas ref={performanceChartRef} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
