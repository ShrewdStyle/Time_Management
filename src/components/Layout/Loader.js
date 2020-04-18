import React, { Fragment } from "./node_modules/react";
import classes from "./Loader.css";

const Loader = () => {
  return (
    <Fragment>
      <div className={classes.PreloaderWrapper}>
        <span className={classes.Loader}>
          <span className={classes.LoaderInner}></span>
        </span>
      </div>
    </Fragment>
  );
};

export default Loader;
