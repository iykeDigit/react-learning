import { useState } from "react";

interface LanguageProps{
    linguas: string[];
    title: string;
    onSelectItem: (item: string)=> void
}

function Languages({linguas, title}: LanguageProps){
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return(
        <>
        <h1>{title}</h1>
        {linguas.length == 0 && <p>No item found</p>}
        <ul className="list-group">
            {linguas.map((lingua, index) => (
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={lingua}
                onClick={() => setSelectedIndex(index)}
                >
                    {lingua}
                </li>
            ))}
        </ul>
        </>
    );
    
}

export default Languages;