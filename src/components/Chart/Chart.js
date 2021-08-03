import React from "react";
import ChartBar from "./ChartBar";
import "../../scss/style.scss";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totlaMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totlaMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
