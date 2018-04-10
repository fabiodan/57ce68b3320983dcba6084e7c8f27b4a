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
  position: relative;
  border-bottom: 1px solid #eee;
`;

const Tab = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 20px 40px;
  transition: all .2s linear;
  white-space: nowrap;
  margin-right: 20px;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  &:last-of-type {
    margin-right: 0;
  }

  ~ hr {
    flex: none;
    position: absolute;
    left: 0;
    bottom: -1px;

    ${({ tabsLength, index, selected }) => {
      return selected ? `transform: translateX()` : '';
    }}
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Underline = styled.hr`
  height: 4px;
  margin: 0;
  background: ${colors()['green']};
  border: none;
  transition: .3s ease-in-out;
  transform: ${({ offsetLeft }) => `translateX(${offsetLeft}px)`};
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: center;
`;

const ContentItem = styled.div`
  position: absolute;
  transition: .3s ease-in-out;
  pointer-events: ${({ selected }) => (selected ? 'auto': 'none')};
  opacity: ${({ selected }) => (selected ? 1: 0)};
  transform: ${({ transform }) => transform};
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.defaultTab,
      width: 0,
      offsetLeft: 0
    };
  }

  componentDidMount() {
    this.selectTab(this.selectedTab, this.props.defaultTab);
  }

  selectTab = (target, selectedTab) => {
    const { offsetWidth: width, offsetLeft } = target;
    this.setState({ selectedTab, width, offsetLeft });
  }

  render() {
    const { options } = this.props,
          { selectedTab, width, offsetLeft } = this.state;

    let selectedContent;

    const tabsData = options.reduce((map, { title, content }, index) => {
      const selected = selectedTab === index;
      if (selected) selectedContent = content;

      const transform = () => {
        if (selected) return 'translateX(0)';
        return `translateX(${index < selectedTab ? '-' : ''}30px)`;
      };

      map.tabs.push(
        <Tab
          {...selected && { innerRef: (comp) => this.selectedTab = comp }}
          selected={selected}
          index={index}
          tabsLength={options.length}
          key={`${title}-${index}`}
          onClick={({ target }) => this.selectTab(target, index)}
        >
          {title}
        </Tab>
      );
      map.content.push(
        <ContentItem
          selected={selected}
          transform={transform()}
        >
          {content}
        </ContentItem>
      );
      return map;
    }, { tabs: [], content: [] });

    return (
      <Wrapper>
        <TabsList>
          {tabsData.tabs}
          {width && <Underline width={width} offsetLeft={offsetLeft}/>}
        </TabsList>
        <ContentWrapper>
        {tabsData.content}
        </ContentWrapper>
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
