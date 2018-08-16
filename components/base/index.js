/* Base Component */

// Utils
import classNames from 'classnames'

// Return the classnames for a component based on the given attributes
const getClasses = (block, modAttrs = [], props) => {

  // The className attribute must be used for mixins only
  const mixins = props.className || ''

  // Convert camel case to hifens (isLoading => is-loading),
  const normalizeModifier = str => (
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  )

  // All modifiers must be passed via props and the full
  // classnames (block--modifier) will be generated automatically
  // and assigned into the modifiers object below
  const modifiers = {}

  // Generate the modifiers class names and assign them into modifiers object
  modAttrs.forEach(modAttr => {

    // Handle non-boolean props (e.g. category="[primary | secondary]")
    const modifierName = typeof props[modAttr] === 'string'
    ? props[modAttr]
    : normalizeModifier(modAttr)

    modifiers[
      `${block}--${modifierName}`
    ] = !!props[modAttr] || false
  })

  return classNames(block, modifiers, mixins)
}

export default getClasses
