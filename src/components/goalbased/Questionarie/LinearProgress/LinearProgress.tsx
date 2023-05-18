import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';

type Props = {
  onChangeProgress: (info: {}) => void;
  labels?: any;
  showLabel?: boolean;
  activeLabel?: string;
  min?: number;
  max?: number;
};

const LinearProgressBar: React.FC<Props> = ({
  onChangeProgress,
  labels,
  showLabel = false,
  activeLabel = '',
  min = 0,
  max = 100,
}) => {
  const [percentage, setPercentage] = useState(min);
  const [labelValues, setLabels] = useState([]);
  const [steps, setSteps] = useState([] as any);
  const [label, setLabel] = useState('');
  const [stepCount, setStepCount] = useState(1);
  const totalSteps = () => {
    setStepCount((max - min) / (labels.length - 1));
    let total = min;
    const arr = [min];
    _.map(labels, () => {
      if (total < max) {
        const d = (max - min) / (labels.length - 1);
        total = d + total;
        arr.push(total);
      }
    });
    return arr;
  };

  useEffect(() => {
    if (activeLabel) {
      _.map(labels, (val, i: number) => {
        if (val === activeLabel) {
          _.map(steps, async (step, j: number) => {
            if (i === j) {
              await setLabel(activeLabel || labels[0]);
              await setPercentage(step);
              await onChangeProgress({
                percentage: step,
                value: activeLabel || labels[0],
              });
            }
          });
        }
      });
    }
    if (min || max) {
      const minMax = async () => {
        await onChangeProgress({
          percentage: min,
          value: activeLabel || labels[0],
        });
      };
      minMax();
    }
    if (labels && labels.length > 0) {
      const setLabelsArr = async () => {
        await setLabels(labels);
        await setLabel(activeLabel || labels[0]);
        await setSteps(totalSteps());
        await onChangeProgress({
          percentage: min,
          value: activeLabel || labels[0],
        });
      };
      setLabelsArr();
    }
  }, [activeLabel, labels, min, max]);

  const bubbleStyle = () => {
    const val = percentage;
    // 96 is width of the range slider
    const newVal = Number(((val - min) * 96) / (max - min));

    // Sorta magic numbers based on size of the native UI thumb
    return { left: `calc(${newVal}% + (${8 - newVal * 0.15}px))` };
  };

  const onChange = async (val: any) => {
    setPercentage(val[0]);
    let d: any = '';
    if (labelValues.length === steps.length) {
      await _.map(steps, async (step, index: number) => {
        if (Math.ceil(step) === Math.ceil(val[0])) {
          d = labelValues[index];
        }
      });
    }
    if (d) await setLabel(d);
    await onChangeProgress({ percentage: val[0], value: d });
  };

  return (
    <div>
      <div className="relative ml-auto mb-12" style={{ width: '91%' }}>
        <Range
          values={[percentage]}
          step={stepCount}
          min={min}
          max={max}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '25px',
                display: 'flex',
                width: '96%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '2px',
                  width: '100%',
                  borderRadius: '3px',
                  background: getTrackBackground({
                    values: [percentage],
                    colors: ['#000', '#E2E2E2'],
                    min,
                    max,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                borderRadius: '100px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.16), 0px 3px 1px rgba(0, 0, 0, 0.1)',
                height: '28px',
                width: '28px',
                outlineStyle: 'none',
              }}
            ></div>
          )}
        />
        {showLabel && (
          <div
            className="bubble absolute left-1/2 rounded px-1 py-3 font-jekoBold text-lg leading-6 text-black"
            style={bubbleStyle()}
          >
            {label}
          </div>
        )}
      </div>
      <style jsx>{`
        .bubble {
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default LinearProgressBar;
