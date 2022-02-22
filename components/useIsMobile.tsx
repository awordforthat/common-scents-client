import { useState, useEffect } from 'react';

import { layoutBreakpoint } from '../styles/_sharedvariables.module.scss';

//debounce on resize so that performance issues aren't caused by
//ppl going bonkers on resizing their windows
const debounceInterval = 10; //in ms - increase me if performance issues occur
const debounce = (fn: Function, ms = debounceInterval) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const resizeBreakpoint = parseInt(layoutBreakpoint.replace('px', '')); //imported from scss

//returns true if viewport is less than the breakpoint
// and false if not (after a debounce) on every resize event
export default function useIsMobile() {
  const [mobile, setMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(
        //window.visualViewport is so resizing works correctly in Chrome Devtools
        window.innerWidth < resizeBreakpoint || window.visualViewport.width < resizeBreakpoint ? true : false
      );
    };

    updateMobile(); //not debounced -- initial calc
    window.addEventListener('resize', debounce(updateMobile));
    return () => {
      window.removeEventListener('resize', debounce(updateMobile));
    };
  }, []);
  return mobile;
}
