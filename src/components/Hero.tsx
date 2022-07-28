import React, { InputHTMLAttributes, useState } from 'react'
import headerIllustrationLight from '../assets/images/header-illustration-light.svg'
import headerIllustrationDark from '../assets/images/header-illustration-dark.svg'
import heroIllustrationMediaLight from '../assets/images/hero-media-illustration-light.svg'
import heroIllustrationMediaDark from '../assets/images/hero-media-illustration-dark.svg'
import heroMediaLight from '../assets/images/hero-media-light.svg'
import heroMediaDark from '../assets/images/hero-media-dark.svg'

const Hero: React.FC<App.HeroProps> = (props) => {

  const [isLight, setLightSwitch] = useState(true)

  const checkLights: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked
    if (checked) {
      document.body.classList.remove('lights-off')
    } else {
      document.body.classList.add('lights-off')
    }
    setLightSwitch(!checked)
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">Landing template for startups</h1>
            <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <div className="hero-cta">
              <a className="button button-primary" href="#">Buy it now</a>
              <div className="lights-toggle">
                <input onChange={checkLights} id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" defaultChecked={isLight} />
                <label htmlFor="lights-toggle" className="text-xs">
                  <span>Turn me</span>
                </label>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="header-illustration">
              <img className="header-illustration-image asset-light" src={headerIllustrationLight} alt="Header illustration" />
              <img className="header-illustration-image asset-dark" src={headerIllustrationDark} alt="Header illustration" />
            </div>
            <div className="hero-media-illustration">
              <img className="hero-media-illustration-image asset-light" src={heroIllustrationMediaLight} alt="Hero media illustration" />
              <img className="hero-media-illustration-image asset-dark" src={heroIllustrationMediaDark} alt="Hero media illustration" />
            </div>
            <div className="hero-media-container">
              <img className="hero-media-image asset-light" src={heroMediaLight} alt="Hero media" />
              <img className="hero-media-image asset-dark" src={heroMediaDark} alt="Hero media" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero