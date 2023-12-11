import React from 'react';

export default function Tag({ tags }) {
  return (
    <div className='containerTag'>
        {tags.map(element => (
            <h4 key={element}>{element}</h4>
        ))}
    </div>
  );
}
