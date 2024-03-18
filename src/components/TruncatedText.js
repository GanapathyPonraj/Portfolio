import React, { useState } from 'react';

const TruncatedText = ({ text, maxHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : text.slice(0, maxHeight);

  return (
    <div className="truncated-text">
      <p style={{ maxHeight: 'maxContent', overflow: 'hidden' }}>
        {truncatedText}
      </p>
      <div id='buttonReadMore'><button className="read-more-btn" onClick={toggleExpand}>
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
      </div>
    </div>
  );
};

export default TruncatedText;