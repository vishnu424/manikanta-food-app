import * as _ from 'lodash';
import { useEffect, useRef, useState } from 'react';

export type UseDebouncedUndoType = (
  fn: () => any,
  delay?: number
) => {
  showUndo: boolean;
  undo: () => void;
  call: () => void;
};

export const useDebouncedUndo: UseDebouncedUndoType = (fn, delay = 3000) => {
  const [showUndo, setShowUndo] = useState(false);
  const wrappedFn = () => {
    fn();
    setShowUndo(false);
  };
  const debouncedFn = useRef(_.debounce(wrappedFn, delay)).current;

  const call = () => {
    setShowUndo(true);
    debouncedFn();
  };

  const undo = () => {
    debouncedFn.cancel();
    setShowUndo(false);
  };

  useEffect(() => {
    return () => {
      debouncedFn.flush();
    };
  }, []);

  return { showUndo, undo, call };
};
