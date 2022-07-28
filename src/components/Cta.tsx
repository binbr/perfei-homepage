import React, { useState } from "react"
import classNames from "classnames"

const Cta: React.FC<App.CtaProps> = (props) => {

  return (
    <section className="cta section">
      <div className="container-sm">
        <div className="cta-inner section-inner">
          <div className="cta-header text-center">
            <h2 className="section-title mt-0">Get it and Switch</h2>
            <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
            <div className="cta-cta">
              <a className="button button-primary" href="#">Buy it now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta