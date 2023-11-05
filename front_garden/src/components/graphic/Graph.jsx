import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ nombrePlanta, nombreSensor }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/getData/${nombrePlanta}/${nombreSensor}`);
        if (response.ok) {
          const jrsp = await response.json();
          const data ={
            x: jrsp.map(item => new Date(item.created_at).toLocaleTimeString()), // Formatea las fechas como una matriz de strings legibles
            y: jrsp.map(item => item.value), // Obtiene los valores como una matriz
          };
          setData(data);
          console.log(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [nombrePlanta, nombreSensor]);

  return (
    <div>
      <h1>Grafico del sensor: {nombreSensor}</h1>
      {data && (
        <Plot
          data={[
            {
              x: data.x,
              y: data.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
            { type: 'bar', x: data.x, y: data.y },
          ]}
          layout={{ width: 320, height: 240, title: 'Plot' }}
        />
      )}
    </div>
  );
};

export default Graph;
