import React from 'react';

const Location = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.99935 6.99967C6.36602 6.99967 6.68002 6.86901 6.94135 6.60767C7.20224 6.34679 7.33268 6.03301 7.33268 5.66634C7.33268 5.29967 7.20224 4.98567 6.94135 4.72434C6.68002 4.46345 6.36602 4.33301 5.99935 4.33301C5.63268 4.33301 5.3189 4.46345 5.05802 4.72434C4.79668 4.98567 4.66602 5.29967 4.66602 5.66634C4.66602 6.03301 4.79668 6.34679 5.05802 6.60767C5.3189 6.86901 5.63268 6.99967 5.99935 6.99967ZM5.99935 11.8997C7.3549 10.6552 8.36046 9.52456 9.01602 8.50767C9.67157 7.49123 9.99935 6.58856 9.99935 5.79967C9.99935 4.58856 9.61313 3.59679 8.84068 2.82434C8.06868 2.05234 7.12157 1.66634 5.99935 1.66634C4.87713 1.66634 3.92979 2.05234 3.15735 2.82434C2.38535 3.59679 1.99935 4.58856 1.99935 5.79967C1.99935 6.58856 2.32713 7.49123 2.98268 8.50767C3.63824 9.52456 4.64379 10.6552 5.99935 11.8997ZM5.99935 13.6663C4.21046 12.1441 2.87446 10.7301 1.99135 9.42434C1.10779 8.11901 0.666016 6.91079 0.666016 5.79967C0.666016 4.13301 1.20224 2.80523 2.27468 1.81634C3.34668 0.827452 4.58824 0.333008 5.99935 0.333008C7.41046 0.333008 8.65202 0.827452 9.72402 1.81634C10.7965 2.80523 11.3327 4.13301 11.3327 5.79967C11.3327 6.91079 10.8911 8.11901 10.008 9.42434C9.12446 10.7301 7.78824 12.1441 5.99935 13.6663Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Location;