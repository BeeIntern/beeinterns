import React from 'react';

import './index.css';

import { ReactComponent as Arrow } from './arrow.svg';

const freeze = (milliseconds) => {
  const currentTime = new Date().getTime();
  while (currentTime + milliseconds > new Date().getTime()) {}
};

class ParallaxHeader extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { top, bottom } = this.componentRef.getBoundingClientRect();

    if (bottom < 0) return;

    this.componentRef.style.backgroundPositionY = `${-top * 0.3}px`;
    this.contentRef.style.transform = `translateY(${-top * 0.5}px)`;

    /* Here is something wrong... */
    // freeze(300);
  };

  onArrowClick = () => {
    document.querySelector('.scroll-to-anchor').scrollIntoView({
      behavior: 'smooth',
    })
  };

  render() {
    return (
      <section
        className="header"
        ref={(e) => { this.componentRef = e; }}
      >
        <div
          className="header-content"
          ref={(e) => { this.contentRef = e; }}
        >
          <h1>
            The 2020 iPhone&nbsp;SE
          </h1>
          <h3>
            A new 4.7-inch iPhone that looks like the iPhone 8 but has the internals of the iPhone 11.
          </h3>
        </div>
        <button
          className="header-arrow"
          onClick={this.onArrowClick}
        >
          Go to article
          <Arrow />
        </button>
      </section>
    );
  }
}

export default ParallaxHeader;
