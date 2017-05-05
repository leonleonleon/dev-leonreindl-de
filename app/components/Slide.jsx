import React            from 'react';
import PropTypes        from 'prop-types';
import Image            from 'image/Image.jsx';

/**
 *  Slide Component
 */
export default class Slide extends React.Component
{
    static propTypes = {
        children : PropTypes.array,
    }

    /**
     * ## constructor
     *
     * sets the initial state
     */
    constructor()
    {
        super( ...arguments );

        this.state = {};

        this.renderSlide.bind( this );
    }

    /**
     * ## componentDidMount
     *
     * loads the settings from the settings server
     */
    componentDidMount()
    {

    }
    /**
     *  renderSlide
     *
     * @param {slide} [slide] slide object
     * @returns {slide} [slide component]
     */
    renderSlide( slide )
    {
        return (
            <div className="slide" key={ slide.image.id }>
                <Image image={ slide.image } />
            </div>
        );
    }
    /**
     *  Slide Render
     *
     *  @return {JSX} Slide element plus children
     */
    render()
    {

        const slides = this.props.children.map( this.renderSlide );

        return <div className="slideshow" ref="slideshow">{ slides } </div>;
    }
}
