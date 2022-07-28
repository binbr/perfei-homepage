/// <reference types="react-scripts" />

declare namespace App {

  interface ComponentsProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  interface HeaderProps extends ComponentsProps {
    hideNav?: boolean
    hideSignin?: boolean
    bottomOuterDivider?: boolean
  }

  interface MainProps extends ComponentsProps {

  }

  interface HeroProps extends ComponentsProps {

  }

  interface FeaturesProps extends ComponentsProps {

  }

  interface CtaProps extends ComponentsProps {
    
  }

}