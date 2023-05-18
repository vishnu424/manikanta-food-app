type Props = {
  sqSize: number;
  percentageValues: any;
  strokeWidth: number;
};

const CircleProgressBar: React.FC<Props> = ({
  sqSize,
  percentageValues,
  strokeWidth,
}) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset =
    dashArray -
    (dashArray * (percentageValues && percentageValues.percentage)) / 100;

  return (
    <>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <linearGradient id="linearColors" x1="1" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#26ab48" />
          <stop offset="100%" stopColor="#b9e5c0" />
        </linearGradient>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(0 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          stroke="url(#linearColors)"
        />
        <text x="50%" y="50%" dy=".3em" textAnchor="middle">
          <tspan
            x="50%"
            y="25%"
            dy="15"
            textAnchor="middle"
            className="text-1 fill-gray-500	text-center text-xs"
          >
            Daily Calorie Intake
          </tspan>
          <tspan
            className="text-2 fill-black text-center font-jekoBold text-6xl"
            textAnchor="middle"
            x="50%"
            y="50%"
            dy="15"
          >
            {`${percentageValues.value}`}
          </tspan>
          <tspan
            className="text-3 fill-black text-center font-jekoBold text-xs"
            textAnchor="middle"
            x="50%"
            y="65%"
            dy="15"
          >
            Calories
          </tspan>
        </text>
      </svg>
      <style jsx>
        {`
          .circle-background,
          .circle-progress {
            fill: none;
          }

          .circle-progress {
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        `}
      </style>
    </>
  );
};

export default CircleProgressBar;
