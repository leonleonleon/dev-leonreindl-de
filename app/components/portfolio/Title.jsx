import React from 'react';

/**
 *  Title
 *
 *  @param {Object} titleProps  props passed from outside
 *
 *  @returns {Object}           React element
 */
export default function Title( titleProps )
{
    const htmlTitle = {
        __html : titleProps.content,
    };

    return (
        <h1 className="title">
            { 'Project: ' }
            <div className="titletext" dangerouslySetInnerHTML={ htmlTitle } />
        </h1>
    );
}
