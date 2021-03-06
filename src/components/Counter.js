import React, { PropTypes } from 'react';
import Radium from 'radium';
import Status from './Status';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="center flex flex-column" style={ styles.base }>
      <Status counter={ counter }/>

      <div className="flex-row">
        <button className="btn btn-outline"
                style={ styles.button }
                onClick={ increment }>Increment</button>

        <div className="m1">
          { ' ' + counter + ' ' }
        </div>

        <button className="btn btn-outline"
                style={ styles.button }
                onClick={ decrement }>Decrement</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default  Radium(Counter);

const styles = {
  base: {
    userSelect: 'none',
  },
  button: {
    fontSize: '0.7em',
  },
};
