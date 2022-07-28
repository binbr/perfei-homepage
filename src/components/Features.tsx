import React, { useState } from "react"
import classNames from "classnames"
import featuresIllustrationLight from '../assets/images/features-illustration-light.svg'
import featuresIllustrationDark from '../assets/images/features-illustration-dark.svg'
import featuresBoxLight from '../assets/images/features-box-light.svg'
import featuresBoxDark from '../assets/images/features-box-dark.svg'
import featuresIllustrationTopLight from '../assets/images/features-illustration-top-light.svg'
import featuresIllustrationTopDark from '../assets/images/features-illustration-top-dark.svg'
import features01Light from '../assets/images/feature-01-light.svg'
import features01Dark from '../assets/images/feature-01-dark.svg'
import features02Light from '../assets/images/feature-02-light.svg'
import features02Dark from '../assets/images/feature-02-dark.svg'
import features03Light from '../assets/images/feature-03-light.svg'
import features03Dark from '../assets/images/feature-03-dark.svg'

const Features: React.FC<App.FeaturesProps> = (props) => {

  return (
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner has-bottom-divider">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">The Product</h2>
              <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
              <div className="features-image">
                <img className="features-illustration asset-dark" src={featuresIllustrationDark} alt="Feature illustration" />
                <img className="features-box asset-dark" src={featuresBoxDark} alt="Feature box" />
                <img className="features-illustration asset-dark" src={featuresIllustrationTopDark} alt="Feature illustration top" />
                <img className="features-illustration asset-light" src={featuresIllustrationLight} alt="Feature illustration" />
                <img className="features-box asset-light" src={featuresBoxLight} alt="Feature box" />
                <img className="features-illustration asset-light" src={featuresIllustrationTopLight} alt="Feature illustration top" />
              </div>
            </div>
          </div>
          <div className="features-wrap">
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img className="asset-light" src={features01Light} alt="Feature 01" />
                  <img className="asset-dark" src={features01Dark} alt="Feature 01" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">Discover</h3>
                  <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                </div>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img className="asset-light" src={features02Light} alt="Feature 02" />
                  <img className="asset-dark" src={features02Dark} alt="Feature 02" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">Discover</h3>
                  <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                </div>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img className="asset-light" src={features03Light} alt="Feature 03" />
                  <img className="asset-dark" src={features03Dark} alt="Feature 03" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title mt-0">Discover</h3>
                  <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features