import './Portfolios.scss';
import React            from 'react';
import PropTypes        from 'prop-types';
import PortfolioItem    from './PortfolioItem.jsx';
import Preloader        from 'preloader/Preloader.jsx';

/**
 *  Portfolios Component
 */
export default class Portfolios extends React.PureComponent
{
    static propTypes = {
        preloader   : PropTypes.bool,
        portfolios  : PropTypes.array,
    }

    /**
     *  Portfolios Render
     *
     *  @return {JSX} Portfolio element plus children
     */
    render()
    {
        const { preloader, portfolios } = this.props;

        if ( preloader ) return <Preloader />;

        return (
            <div className="portfolios">
                <div className="hello">
                    Hello, my name is Leon. I am a Web Developer / Designer living in Berlin.
                </div>
                {
                    portfolios.map( ( portfolio ) =>
                    {
                        return <PortfolioItem { ...portfolio } key={ portfolio.id } />;
                    } )
                }
            </div>
        );
    }
}
