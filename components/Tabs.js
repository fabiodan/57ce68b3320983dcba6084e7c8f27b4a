import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

const Wrapper = styled.div`
  width: 100%;
`;

const TabsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  font-family: 'Source Sans Pro';
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eee;
  -webkit-font-smoothing: antialiased;
  width: 100%;
`;

const Tab = styled.li`
  color: ${({ selected }) => (selected ? '#3D3D3D' : '#666666')};
  font-weight: ${({ selected }) => (selected ? 700 : 500)};
  list-style: none;
  cursor: pointer;
  padding: 20px 0;
  flex: 1;
  transition: transform .2s linear, background .2s linear;
  white-space: nowrap;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background: rgba(0,0,0,.02);
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
`;

const Underline = styled.hr`
  height: 4px;
  margin: 0;
  background: ${colors()['green']};
  border: none;
  transition: transform .3s cubic-bezier(0,0.5,0.5,1);
  transform: ${({ offsetLeft }) => `translateX(${offsetLeft}px)`};
`;

const ContentWrapper = styled.div`
  position: relative;
  width: ${({ length }) => `${length * 100}%`};
  display: flex;
  transform: ${({ transform }) => transform};
  transition: transform .3s cubic-bezier(0,0.75,0.75,1);
`;

const ContentItem = styled.div`
  pointer-events: ${({ selected }) => (selected ? 'auto': 'none')};
  width: 100%;
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

    const tabsData = options.reduce((map, { title, content }, index) => {
      const selected = selectedTab === index;

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
          key={`${title}-${index}`}
        >
          {content}
        </ContentItem>
      );
      return map;
    }, { tabs: [], content: [] });


    const transform = (selectedTab) => {
      return `translateX(-${(100 / options.length) * selectedTab}%)`;
    };

    return (
      <Wrapper>
        <TabsList>
          {tabsData.tabs}
          {width && <Underline width={width} offsetLeft={offsetLeft}/>}
        </TabsList>
        <ContentWrapper
          length={options.length}
          transform={transform(selectedTab)}
        >
          {tabsData.content}
        </ContentWrapper>
      </Wrapper>
    );
  }
};

Tabs.propTypes = {
  defaultTab: PropTypes.number,
  options: PropTypes.array
};

Tabs.defaultProps = {
  defaultTab: 0
};

export default Tabs;
