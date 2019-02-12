import React from 'react';
import './style.scss';

class Dialog extends React.PureComponent {
  render(){
    const classList = `dialog ${this.props.open && 'dialog--visible'}`;
    return (
      <div className={classList}>
        <div className="dialog__content">
            <h1>DIALOG CONTENT</h1>
        </div>
      </div>
    );
  }
};
  
export default Dialog;