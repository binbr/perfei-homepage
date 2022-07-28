import React from 'react'
import ScrollReveal from 'scrollreveal'
import { Header, Main, Footer } from './layouts'
import { Hero, Features, Cta } from './components'

const App: React.FC = () => {

  console.log('[App] rendered.')

  React.useEffect(() => {
    // body loaded
    document.body.classList.add('is-loaded')
    // Reveal animations
    document.body.classList.contains('has-animations') && ScrollReveal().reveal('.feature', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  })

  return (
    <>
      <Header className='' />
      <Main>
        <Hero />
        <Features />
        <Cta />
      </Main>
      <Footer />
    </>
  )
}

export default App
