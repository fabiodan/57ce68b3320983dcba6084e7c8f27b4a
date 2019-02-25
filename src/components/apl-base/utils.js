/* Button Component */

// Utils
import classNames from 'classnames'

// Return the classnames for a component based on the given attributes
const getClassList = (blockOrElem, modAttrs = [], props) => {
  if (!blockOrElem) throw new Error('The block or element class name should be defined.')

  // All modifiers must be passed via boolean mod attributes (modAttrs)
  // and the full classnames (block--modifier) will be generated automatically
  // and assigned into the modifiers object below
  const modifiers = {}

  const isBlock = blockOrElem.indexOf('__') === -1
  const blockName = blockOrElem.replace(/__.*/, '')

  // The className attribute must be used for mixins only
  const mixins = props.className || ''

  // Avoid modifier class assignment to className attribute
  if (mixins.indexOf('--') !== -1) {
    const msg = 'You tried to assign a modifier class to the className attribute ' +
                'which should only be used for mixins. Use boolean mod attributes ' +
                `to define modifiers classes for the ${blockOrElem} component.`

    throw new Error(msg)
  }

  // Convert camel case to hifens (isLoading => is-loading),
  // remove underscore from element modifiers attributes (_dark => dark)
  const normalizeModifier = str => (
    str.replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/_/, '')
      .toLowerCase()
  )

  // Generate the modifiers class names and assign them into modifiers object
  modAttrs.forEach((modAttr) => {
    // By default all modifiers are block level (block--modifier)
    let identifier = blockName
    const modifierName = modAttr

    // Is it an element modifier? (block__elem--modifier)
    // Element modifiers come with a prefixed underscore "_" in the attr name
    if (props[modAttr] && modAttr.indexOf('_') === 0) {
      if (isBlock) {
        const msg = `You tried to add the element modifier "${modAttr}" to the block ` +
                    `"${blockName}", you should add underscore modifiers to elements ` +
                    'only or remove the underscore to make it a block modifier.'

        throw new Error(msg)
      }

      identifier = blockOrElem // Assign element class to the identifier
    }

    modifiers[`${identifier}--${normalizeModifier(modifierName)}`] = props[modAttr] || false
  })

  // Join classnames together
  return classNames(
    blockOrElem,
    modifiers,
    mixins,
  )
}

export default getClassList
