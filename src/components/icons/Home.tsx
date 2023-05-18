import React from 'react';

const Home = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.99935 10.6667H3.99935V6.66667H7.99935V10.6667H9.99935V4.66667L5.99935 1.66667L1.99935 4.66667V10.6667ZM0.666016 12V4L5.99935 0L11.3327 4V12H6.66602V8H5.33268V12H0.666016Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Home;
