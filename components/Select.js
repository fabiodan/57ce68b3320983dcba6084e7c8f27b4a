import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const StyledSelect = styled(ReactSelect)`
  min-width: 300px;
  font-family: 'Source Sans Pro';
  font-size: 14px;

  .Select-input {
    height: 40px;

    > input {
      padding: 10px 0 10px 5px;
      line-height: 20px;
    }
  }

  &.is-focused:not(.is-open) > .Select-control {
    border: 1px solid rgba(0, 0, 0, .4) !important;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1) !important;
  }

  .Select-placeholder,
  &.Select--single > .Select-control .Select-value {
    font-weight: 400;
    color: #767676;
    line-height: 40px;
    padding: 0 15px;
  }

  .Select-arrow {
    border-color: #3d3d3d transparent transparent;
    border-width: 4.5px 4.5px 1px;
    border-radius: 4px;
    width: 11px;
    background: white;
  }

  &.is-open > .Select-control {
    border: 1px solid rgba(0, 0, 0, .2) !important;

    .Select-arrow {
      border-color: transparent transparent #3d3d3d !important;
      border-width: 4.5px 4.5px 1px;
    }
  }

  .Select-control {
    border: 1px solid rgba(0, 0, 0, .2);
    cursor: pointer;
    transition: border .2s linear;

    &:hover {
      box-shadow: none;
      border: 1px solid rgba(0, 0, 0, .3);
    }

    > *:last-child {
      padding-right: 15px;
    }
  }

  .Select-menu-outer {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
  }

  .Select-option {
    padding: 10px 15px;
    font-size: 14px;

    &.is-selected {
      background: rgba(0, 0, 0, 0.03);
    }

    &.is-focused {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  .Select-value, .Select-option {
    &.blank,
    &.amex,
    &.cirrus,
    &.diners,
    &.discover,
    &.maestro,
    &.mastercard,
    &.plus,
    &.visa {
      padding-left: 55px !important;
      background-repeat: no-repeat;
      background-position: 15px 10px;
    }

    &.blank {
      background-image: ${({ icons }) => (icons['blank'] ? `url('${icons['blank']}')` : 'none')};
    }
    &.amex {
      background-image: ${({ icons }) => (icons['amex'] ? `url('${icons['amex']}')` : 'none')};
    }
    &.cirrus {
      background-image: ${({ icons }) => (icons['cirrus'] ? `url('${icons['cirrus']}')` : 'none')};
    }
    &.diners {
      background-image: ${({ icons }) => (icons['diners'] ? `url('${icons['diners']}')` : 'none')};
    }
    &.discover {
      background-image: ${({ icons }) => (icons['discover'] ? `url('${icons['discover']}')` : 'none')};
    }
    &.maestro {
      background-image: ${({ icons }) => (icons['maestro'] ? `url('${icons['maestro']}')` : 'none')};
    }
    &.mastercard {
      background-image: ${({ icons }) => (icons['mastercard'] ? `url('${icons['mastercard']}')` : 'none')};
    }
    &.plus {
      background-image: ${({ icons }) => (icons['plus'] ? `url('${icons['plus']}')` : 'none')};
    }
    &.visa {
      background-image: ${({ icons }) => (icons['visa'] ? `url('${icons['visa']}')` : 'none')};
    }
  }
`;

class Select extends Component {
  constructor(props) {
     super(props);
     this.state = { selectedOption: '', icons: {} };
  }

  componentWillReceiveProps({ options }) {
    options.forEach(({ className }) => {
      if (className) {
        import(`../images/creditcards/${className}.png`).then((image) => {
          this.setState({
            icons: {
              ...this.state.icons,
              [className]: image
            }
          });
        });
      }
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { placeholder, options } = this.props,
          { selectedOption, icons } = this.state,
          value = selectedOption && selectedOption.value;

    return (
      <StyledSelect
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        placeholder={placeholder}
        clearable={false}
        icons={icons}
        options={options}
      />
    );
  }
};

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array
};

Select.defaultProps = {
  placeholder: 'Select a value'
};

export default Select;
