import React from 'react';
import './style.scss';

/**
 * Loader compoent from https://loading.io/css/
 */

function EllipsisLoader (props){
    const isLoading = { opacity: props.show ? 1 : 0 };
    return (
      <div className="lds-ellipsis" style={isLoading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
}

export default EllipsisLoader;