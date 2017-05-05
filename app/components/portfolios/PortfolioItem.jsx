import React                from 'react';
import { Link }             from 'react-router';
import { PORTFOLIO_SLUG }   from 'config/app.json';
import Image                from 'image/Image.jsx';
/**
 *  PortfolioItem
 *
 *  @param {Object} itemProps props that are passed to the component
 *
 *  @returns {Object} react element
 */
export default function PortfolioItem( itemProps )
{
    const { slug, acf : { slides }, title } = itemProps;
    const url = `/${PORTFOLIO_SLUG}/${slug}`;
    const image = slides[ 0 ].image;
    const htmlTitle = {
        __html : title.rendered,
    };

    return (
        <div className="portfolio-item" data-slug={ slug }>
            <Link to={ url }>
                <Image image={ image } />
                <div className="description" dangerouslySetInnerHTML={ htmlTitle } />
            </Link>
        </div>
    );
}
