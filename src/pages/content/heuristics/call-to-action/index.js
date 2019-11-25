// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import { Heading1 } from '@sg/sg-layout'
import {
  Label,
  Checkbox,
} from '@asda/form'

// Assets
import './_style.scss'

class PassFailCheckbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
    }
    this.toggleCheck = this.toggleCheck.bind(this)
  }

  toggleCheck() {
    const { isChecked } = this.state
    this.setState({ isChecked: !isChecked })
  }

  render() {
    const { index, className } = this.props
    const { isChecked } = this.state
    const modifiers = [
      isChecked && 'heuristics-call-to-action__grid__pass-fail--checked',
    ]
    const classNames = joinClassNames(
      'heuristics-call-to-action__grid__pass-fail',
      className,
      modifiers,
    )
    return (
      <div className={classNames}>
        <Checkbox
          hover
          onChange={this.toggleCheck}
          id={`heuristics-call-to-action-checkbox-${index}`}
          className="heuristics-call-to-action__checkbox"
        />
        <Label
          inline
          htmlFor={`heuristics-call-to-action-checkbox-${index}`}
          className="heuristics-call-to-action__checkbox"
        >
          Pass
        </Label>
        <div className="heuristics-call-to-action__status">
          {isChecked
          ? <span className="heuristics-call-to-action__grid__pass">Pass</span>
          : <span className="heuristics-call-to-action__grid__fail">Fail</span>
        }
        </div>
      </div>
    )
  }
}

const HeuristicsCallToActionPage = () => (
  <article className="heuristics-call-to-action">

    <Heading1>Call to action heuristics</Heading1>

    <div className="heuristics-call-to-action__grid">
      {/* Header */}
      <h4 className="heuristics-call-to-action__grid__header">Heuristic principle</h4>
      <h4 className="heuristics-call-to-action__grid__header">Pass</h4>
      <h4 className="heuristics-call-to-action__grid__header">Notes</h4>

      {/* Row */}
      <div className="heuristics-call-to-action__grid__description">
        <h5 className="heuristics-call-to-action__grid__title">Concise</h5>
          Keep button labels and calls to action to 3 words or less.
      </div>
      <PassFailCheckbox index={1} />
      <div className="heuristics-call-to-action__grid__notes" contentEditable="true" />

      {/* Row */}
      <div className="heuristics-call-to-action__grid__description">
        <h5 className="heuristics-call-to-action__grid__title">Positive</h5>
          Use active language. Start with a verb where possible. Focus on the
          positive.
      </div>
      <PassFailCheckbox index={2} />
      <div className="heuristics-call-to-action__grid__notes" contentEditable="true" />

      {/* Row */}
      <div className="heuristics-call-to-action__grid__description">
        <h5 className="heuristics-call-to-action__grid__title">Relevant</h5>
          Give only the information the user needs in order to understand how to
          move forward.
      </div>
      <PassFailCheckbox index={3} />
      <div className="heuristics-call-to-action__grid__notes" contentEditable="true" />

      {/* Row */}
      <div className="heuristics-call-to-action__grid__description">
        <h5 className="heuristics-call-to-action__grid__title">Natural</h5>
          Use self explanatory, natural language – try to role play the action
          to see what you’d say to a friend.
      </div>
      <PassFailCheckbox index={4} />
      <div className="heuristics-call-to-action__grid__notes" contentEditable="true" />
    </div>

  </article>
)

export default HeuristicsCallToActionPage
