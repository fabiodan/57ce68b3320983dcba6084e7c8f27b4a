import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TabsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro';
  color: #3D3D3D;
  font-weight: 700;
  text-align: center;
`;

const Tab = styled.li`
  list-style: none;
  cursor: pointer;
  padding: ${({ selected }) => `20px 35px ${selected ? '17px' : '20px'}`};
  border-bottom: ${({ selected }) => (selected ? `4px solid ${colors()['green']}` : '1px solid #eee')};
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: props.defaultTab };
  }

  selectTab = (selectedTab) => this.setState({ selectedTab });

  render() {
    const { options } = this.props,
          { selectedTab } = this.state;

    let selectedContent;

    const tabs = options.map(({ title, content }, index) => {
      const selected = selectedTab === index;
      if (selected) selectedContent = content;
      return (
        <Tab
          selected={selected}
          key={`${title}-${index}`}
          onClick={() => this.selectTab(index)}
        >
          {title}
        </Tab>
      );
    });

    return (
      <Wrapper>
        <TabsList>{tabs}</TabsList>
        {selectedContent}
      </Wrapper>
    );
  }
};

Tabs.propTypes = {
  defaultTab: PropTypes.number
};

Tabs.defaultProps = {
  defaultTab: 0
};

export default Tabs;
