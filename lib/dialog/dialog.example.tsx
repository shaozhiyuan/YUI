import React, {useState, Fragment} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';


export default function () {
  const [x, setX] = useState(false);
  return (
    <div>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          onClose={() => setX(false)}
          buttons={
            <Fragment>
              <button onClick={e => setX(false)}>Cancel</button>
              <button onClick={e => setX(false)}>OK</button>
            </Fragment>
          }>
          hi
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          onClose={() => setX(false)}
          buttons={
            <Fragment>
              <button onClick={e => setX(false)}>Cancel</button>
              <button onClick={e => setX(false)}>OK</button>
            </Fragment>
          }>
          hi
        </Dialog>
      </div>
      <div>
        <h1>example3</h1>
        <button onClick={() => alert('alert')}>alert</button>
        <button onClick={() => confirm('confirm', () => {}, () => {})}>confirm</button>
        <button onClick={() => modal('modal')}>alert</button>
      </div>
    </div>
  );
}