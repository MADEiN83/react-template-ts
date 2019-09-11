import React, { useEffect, useState } from "react";

import "./style.scss";

interface IProps {}

let timeout: NodeJS.Timeout;

const Debug: React.FC<IProps> = (props: IProps) => {
  const [loadTime, setLoadTime] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    timeout = setTimeout(() => {
      const loadTime =
        window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart;
      setLoadTime(loadTime);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isHidden) return <></>;

  return (
    <div
      className="debug-container"
      onClick={() => setIsHidden(true)}
      title="Click to hide"
    >
      <div className="item">DEBUG ONLY</div>
      <div className="flex">
        <div className="item">
          <span className="visible-xs" title="0px to 576px">
            XS
          </span>
          <span className="visible-sm" title="576px to 768px">
            SM
          </span>
          <span className="visible-md" title="768px to 992px">
            MD
          </span>
          <span className="visible-lg" title="992px to 1200px">
            LG
          </span>
          <span className="visible-xl" title="over 1200px">
            XL
          </span>
        </div>
        <div className="item">{loadTime === 0 ? "..." : `${loadTime}ms`}</div>
      </div>
    </div>
  );
};

export default Debug;
