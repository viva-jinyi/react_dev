import React from 'react';
import './Item.css'

const Item = () => {
    return (
        <>
            <li className="Item">
                <span > &#10003;  </span>
                <em >  테스트  </em> <button >삭제</button>
            </li>
        </>
    );
};

export default Item;