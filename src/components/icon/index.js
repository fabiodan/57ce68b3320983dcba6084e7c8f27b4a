// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Alert = () => (
  <path d="m16.0022009 22.4657833c-.5522847 0-1-.4477153-1-1 0-.5522848.4477153-1 1-1 .5522848 0 1 .4477152 1 1 0 .5522847-.4477152 1-1 1zm.0033917-3h-.0010447c-.5522847 0-1-.4477153-1-1v-6c0-.5522848.4477153-1 1-1h.0010447c.5522847 0 1 .4477152 1 1v6c0 .5522847-.4477153 1-1 1zm-8.71864283 5h17.43050223c.2761424 0 .5-.2238576.5-.5 0-.0862178-.0222945-.1709706-.0647186-.2460286l-8.7152511-15.4192905c-.1358778-.24039929-.4409107-.32513065-.68131-.18925279-.07911.04471433-.1445385.11014281-.1892528.18925279l-8.71525114 15.4192905c-.13587786.2403992-.0511465.5454321.18925279.68131.075058.0424241.15981083.0647186.24602862.0647186zm10.45637683-17.9195469 9.5722009 16.9354324c.5435114.9615971.204586 2.1817287-.7570112 2.7252402-.300232.1696963-.6392433.2588743-.9841145.2588743h-19.1444018c-1.1045695 0-2-.8954305-2-2 0-.3448712.08917796-.6838825.25887432-.9841145l9.57220088-16.9354324c.5435115-.96159716 1.7636431-1.3005226 2.7252402-.75701116.3164399.17885735.5781538.44057123.7570112.75701116z" />
)

const Browse = () => (
  <path d="m19 12 8 8h-3.5s1.8123269 3.3495845 2.5 5c.1456602.3495845-.0748975.8005886-.3979492.9454346-.3230517.1448459-.8751221.1448459-1.1612549-.2463379l-2.4407959-4.6990967-3 3zm-13 8h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0-7h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0-7h18c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-18c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" />
)

const Check = () => (
  <path stroke="currentColor" d="m22.7885822 10.6464466-9.5459415 9.5459416-3.88908731-3.8890873c-.19526215-.1952622-.51184463-.1952622-.70710678 0-.19526215.1952621-.19526215.5118446 0 .7071067l4.24264069 4.2426407c.1952621.1952622.5118446.1952622.7071068 0l9.8994949-9.8994949c.1952622-.1952622.1952622-.5118446 0-.7071068-.1952621-.1952621-.5118446-.1952621-.7071068 0z" />
)

const ChevronDown = () => (
  <path d="m15.8994949 19.4852814 9.1923882-9.1923882c.3905243-.39052427 1.0236893-.39052427 1.4142136 0 .3905242.3905243.3905242 1.0236893 0 1.4142136l-9.899495 9.8994949c-.3905243.3905243-1.0236893.3905243-1.4142135 0l-9.89949498-9.8994949c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136.39052429-.39052427 1.02368927-.39052427 1.41421356 0z"/>
)

const Close = () => (
  <path d="m17.6066017 16.1923882 7.0710678 7.0710678c.3905243.3905243.3905243 1.0236892 0 1.4142135s-1.0236892.3905243-1.4142135 0l-7.0710678-7.0710678-7.07106786 7.0710678c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236892 0-1.4142135l7.07106782-7.0710678-7.07106782-7.07106786c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.07106786 7.07106782 7.0710678-7.07106782c.3905243-.39052429 1.0236892-.39052429 1.4142135 0s.3905243 1.02368927 0 1.41421356z" />
)

const Menu = () => (
  <path d="m7 7h18c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-18c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 8h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-9c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0 8h15c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-15c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" />
)

const Minus = () => (
  <path d="m9 15h14c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" />
)

const Plus = () => (
  <path d="m17 15h5c1 0 2 0 2 1s-1 1-2 1h-5v5c0 1 0 2-1 2s-1-1-1-2v-5h-5c-1 0-2 0-2-1s1-1 2-1h5v-5c0-1 0-2 1-2s1 1 1 2z" />
)

const Swap = () => (
  <path d="m10 12h12zm1.2071068 7h11.7928932c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-11.7928932l1.2928932 1.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-2.64644657-2.6464466c-.58578644-.5857865-.58578644-1.5355339 0-2.1213204l2.64644657-2.6464466c.3905243-.3905243 1.0236893-.3905243 1.4142136 0s.3905243 1.0236893 0 1.4142136zm9.3786796-8-1.2928932-1.29289322c-.3905243-.39052429-.3905243-1.02368927 0-1.41421356s1.0236893-.39052429 1.4142136 0l2.6464466 2.64644658c.5857864.5857865.5857864 1.5355339 0 2.1213204l-2.6464466 2.6464466c-.3905243.3905243-1.0236893.3905243-1.4142136 0s-.3905243-1.0236893 0-1.4142136l1.2928932-1.2928932h-11.5857864c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" />
)

const AddToList = () => (
  <path d="m21 14c-2.7614237 0-5-2.2385763-5-5 0-2.76142375 2.2385763-5 5-5s5 2.23857625 5 5c0 2.7614237-2.2385763 5-5 5zm1-6v-1.5c0-.27614237-.2238576-.5-.5-.5h-1c-.2761424 0-.5.22385763-.5.5v1.5h-1.5c-.2761424 0-.5.22385763-.5.5v1c0 .27614237.2238576.5.5.5h1.5v1.5c0 .2761424.2238576.5.5.5h1c.2761424 0 .5-.2238576.5-.5v-1.5h1.5c.2761424 0 .5-.22385763.5-.5v-1c0-.27614237-.2238576-.5-.5-.5zm2 7.3263688c.7496048-.3560983 1.4258795-.8415018 2-1.4273861v12.1010173c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-20c0-1.1045695.8954305-2 2-2h8.1010173c-.5858843.5741205-1.0712878 1.25039523-1.4273861 2h-6.1736312c-.27614237 0-.5.22385763-.5.5v19c0 .2761424.22385763.5.5.5h15c.2761424 0 .5-.2238576.5-.5zm1.8989827-11.3263688h.1010173v.10101726c-.03333-.03401294-.0670043-.06768725-.1010173-.10101726zm-8.5065693 11c1.0535428.6348198 2.2879185 1 3.6075866 1v.5c0 .2761424-.2238576.5-.5.5h-5c-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5zm-5.8924134 0h1c.2761424 0 .5.2238576.5.5v1c0 .2761424-.2238576.5-.5.5h-1c-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5zm0 5h1c.2761424 0 .5.2238576.5.5v1c0 .2761424-.2238576.5-.5.5h-1c-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5zm4 0h5c.2761424 0 .5.2238576.5.5v1c0 .2761424-.2238576.5-.5.5h-5c-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5zm-4-10h1c.2761424 0 .5.2238576.5.5v1c0 .2761424-.2238576.5-.5.5h-1c-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5z"/>
)

const IconBase = ({
  children, className, color, size,
}) => {
  const modifiers = [
    !!color && `icon--${color}`,
    !!size && `icon--${size}`,
  ]
  const classNames = joinClassNames('icon', className, modifiers)

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

const SVG = ({ name }) => {
  const icons = {
    'add-to-list': AddToList,
    alert: Alert,
    browse: Browse,
    check: Check,
    'chevron-down': ChevronDown,
    close: Close,
    menu: Menu,
    minus: Minus,
    plus: Plus,
    swap: Swap,
  }

  const IconPath = icons[name]

  return (
    <svg className="icon__svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <IconPath />
    </svg>
  )
}

const Icon = ({ name, ...props }) => (
  <IconBase {...props}>
    <SVG name={name} />
  </IconBase>
)

IconBase.defaultProps = {
  color: 'charcoal',
  size: 'medium',
}

const IconButton = ({ name, onClick, ...props }) => (
  <IconBase {...props}>
    <button className="icon__button" type="button" onClick={onClick}>
      <SVG name={name} />
    </button>
  </IconBase>
)

export {
  Icon as default,
  IconButton,
}
