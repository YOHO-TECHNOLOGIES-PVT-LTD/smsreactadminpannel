import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

// Sample data
const labels = ['Completed', 'Pending', 'In Progress'];
const values = [12, 5, 8];
const colors = ['#EEA29A', '#DAC292', '#B7D7E8'];
const total = values.reduce((sum, val) => sum + val, 0);

export const data = {
  labels,
  datasets: [
    {
      label: 'Orders',
      data: values,
      backgroundColor: colors, // semi-transparent
      borderColor: colors,
      borderWidth: 1,
      hoverBorder:colors,
      hoverBorderWidth:0,
    },
  ],
};

export function SoSCard() {
  return (
    <div className=" space-y-6">
        {/* Custom Legend */}
      <div className="flex justify-around text-sm -mb-3">
        {labels.map((label, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: colors[idx] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      {/* Doughnut Chart */}
      <div className="w-50 h-50 mx-auto ">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: true,
              },
            },
            cutout: '60%',
            maintainAspectRatio: false,
          }}
        />
      </div>

      {/* Progress Bars */}
      <div className="space-y-2 ">
        {labels.map((label, idx) => {
          const percentage = ((values[idx] / total) * 100).toFixed(0);
          return (
            <div key={idx}>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>{label}</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: colors[idx],
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
