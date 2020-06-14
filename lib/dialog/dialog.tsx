import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {scopedClassMaker} from '../helpers/classes';
import Icon from '../icon/icon';

interface Props {
  visible: boolean,
  buttons?: ReactFragment | ReactElement,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean
}

const sc = scopedClassMaker('yui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {props.buttons}
        </footer>
      </div>
    </Fragment> :
    null;
  return (
    ReactDOM.createPortal(x, document.body)
  );
};


Dialog.defaultProps = {
  closeOnClickMask: false
};


const Modal = (content: ReactNode, buttons?: ReactFragment | ReactElement, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    afterClose && afterClose();
    return true;
  };
  const component =
    <Dialog
      visible={true}
      onClose={close}
      buttons={buttons}
    >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

export const alert = (content: ReactNode, callback?: () => void) => {
  const close = Modal(content,
    <button onClick={() => close() && callback && callback()}>确定</button>);
};

export const confirm = (content: ReactNode, yes: () => void, no?: () => void) => {
  const close = Modal(content,
    <Fragment>
      <button onClick={() => close() && no && no()}>取消</button>
      <button onClick={() => close() && yes && yes()}>确定</button>
    </Fragment>
  );
};

export const modal = (content: ReactNode) => {
  return Modal(content);
};


export default Dialog;