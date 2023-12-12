import React, { useState } from 'react'

export default function Dropbox({titleDrop, contentDrop}) {
    const [isActive, setIsActive] = useState(false);
    
    const toggleClass = () => {
        setIsActive(!isActive);
    };

    function filter() {
        if (Array.isArray(contentDrop)) {
            return (
                <ul className='contentInfo'>
                    {contentDrop.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            );
        } else {
            return(
                <p className='contentInfo'>
                    {contentDrop}

                </p>
            )
        }
    }

    return (
         <div className='contentbox'>
            <button className='contentboxbutton' onClick={toggleClass}>{titleDrop}</button>
            <div className={isActive ? "contentboxlogement active-class" : "contentboxlogement"}>
                {filter()}
            </div>
        </div>
    );
}
   