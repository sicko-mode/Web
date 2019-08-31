import React from 'react';

const Item = () => {
    return (
        <div className="item">
          <div className="remove" onClick={(e) => {
            e.stopPropagation();
            onRemove(id)}
          }>&times;</div>
          <div className='item-text'>
            <div>{text}</div>
          </div>
          <div className="count">
            <input value={count} />
            <button onClick={onUp()}></button>
            <button onClick={onDown()}></button>
          </div>
        </div>
    );
};

export default Item;