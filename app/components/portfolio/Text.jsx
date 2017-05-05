import React from 'react';

/**
 *  Text
 *
 *  @param {Object} textProps  props passed from outside
 *
 *  @returns {Object}           React element
 */
export default function Text( textProps )
{
    const htmlText = {
        __html : textProps.content,
    };

    return (
        <div className="text" dangerouslySetInnerHTML={ htmlText } />
    );
}
