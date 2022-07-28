import React from 'react'
import classNames from 'classnames'
import logoLight from '../assets/images/logo-light.svg'
import logoDark from '../assets/images/logo-dark.svg'

const Header: React.FC<App.HeaderProps> = (props) => {

  console.log('[Header] rendered.')

  // const [isActive, setIsActive] = useState<boolean>(false)

  // const navEl: React.MutableRefObject<any> = useRef(null)

  // const openMenu: React.MouseEventHandler = () => {
  //   document.body.classList.add('off-nav-is-active')
  //   navEl.current.style.maxHeight = navEl.current.scrollHeight + 'px'
  //   setIsActive(true)
  // }

  const headerClasses = classNames(
    'site-header',
    props.className
  )

  return (
    <header className={headerClasses} style={props.style}>
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="#">
                <img className="header-logo-image asset-light" src={logoLight} alt="Logo" />
                <img className="header-logo-image asset-dark" src={logoDark} alt="Logo" />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
