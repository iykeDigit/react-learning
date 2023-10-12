import React, { useState } from 'react'

interface Props{
    children: string;
    maxChars?: number;
}

const MoreComponent = ({children, maxChars=100}: Props) => {
    if(children.length <= maxChars) return <p>{children}</p>
    const[isExpanded, setExpanded] = useState(false);
    const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      <p>{text}...
      <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button>
      </p>
    </>
    
  )
}

export default MoreComponent