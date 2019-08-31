import React from 'react';

const Item = ({onDown, onUp, onRemove, text, count, id}) => {
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
            <input readOnly value={count} />
            <button onClick={() => onUp(id)}></button>
            <button onClick={() => onDown(id)}></button>
          </div>
        </div>
    );
};

export default Item;