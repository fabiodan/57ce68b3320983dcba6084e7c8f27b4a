import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

const SectionHeader = styled.div`
  background: rgba(0,0,0,.03);
  font-size: 12px;
  text-transform: uppercase;
  padding: 8px 16px;
`;

const List = styled.ul`
  padding: 0 0 0 16px;
  font-size: 14px;

  &.suggestions {
    padding: 0;
    margin: 0;

    li {
      margin: 0;
    }
  }

  li {
    margin: 8px 0;
    list-style: none;
  }
`;

const ArrowLink = styled.li`
  position: relative;
  cursor: pointer;
  transition: background .2s linear;
  margin: 0;
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  &:hover > div {
    transform: translateX(-10px);
  }
`;

const ArrowIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  top: calc(50% - 12px);
  transition: all .4s cubic-bezier(.7,-0.5,.3,1.5);
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  color: #767676;
  display: block;
  font-weight: 400;
`;

const Ingredients = () => (
  <React.Fragment>
    <SectionHeader>Primary Ingredients</SectionHeader>
    <List>
      <li>2 boneless, skinless <strong>chicken breasts</strong></li>
      <li>3 cups of chopped <strong>yellow onions</strong></li>
      <li>½ cup of <strong>jasmine rice</strong></li>
    </List>
    <SectionHeader>Unadded Items</SectionHeader>
    <List>
      <li>½ cup of <strong>soy sauce</strong></li>
    </List>
    <SectionHeader>Suggestions</SectionHeader>
    <List className="suggestions">
      <ArrowLink>
        <Title>Pairings</Title>
        <Subtitle>Find deals on products that go with this dish</Subtitle>
        <ArrowIcon
          icon="chevron_right"
          color="gray"
          scale={0.8}
        />
      </ArrowLink>
      <ArrowLink>
        <Title>Similar Recipes</Title>
        <Subtitle>...like Salmon and vegetable bake tray</Subtitle>
        <ArrowIcon
          icon="chevron_right"
          color="gray"
          scale={0.8}
        />
      </ArrowLink>
      <ArrowLink>
        <Title>Cooking Mode</Title>
        <Subtitle>Simple step-by-step instructions</Subtitle>
        <ArrowIcon
          icon="chevron_right"
          color="gray"
          scale={0.8}
        />
      </ArrowLink>
    </List>
  </React.Fragment>
);

export default Ingredients;
