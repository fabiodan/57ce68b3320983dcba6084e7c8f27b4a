import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';
import Tabs from './Tabs';
import recipeImage from '../images/recipe-image.jpg';
import Ingredients from './Ingredients';
import Details from './Details';

const Overlay = styled.div`
  background: ${({ mounted }) => `rgba(0,0,0,${mounted ? .3 : 0}`});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background .4s linear;

  @media (max-width: 375px) {
    justify-content: flex-start;
  }
`;

const RecipeDetails = styled.div`
  background: #fff;
  border-radius: 8px;
  color: #3d3d3d;
  z-index: 101;
  position: relative;
  max-width: 530px;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  opacity: ${({ mounted }) => (mounted ? 1 : 0)};
  transform: ${({ mounted }) => `translateY(${mounted ? 0 : '200'}px)`};
  transition: all .7s cubic-bezier(.7,-0.5,.3,1.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  pointer-events: auto;
  font-family: "Source Sans Pro";
  font-weight: 400;
  overflow-y: scroll;

  @media (max-width: 375px) {
    border-radius: 0;
    opacity: 1;
    transform: ${({ mounted }) => `translateY(${mounted ? 0 : 'calc(100vh)'})`};
    transition: all .5s cubic-bezier(0,0.5,0.5,1);
  }
`;

const MainImage = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    overflow: hidden;
  }
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 100;
`;

const HeartIcon = styled(Icon)`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const Header = styled.div`
  padding: 32px 32px 0;

  @media (max-width: 375px) {
    padding: 16px 16px 0;
  }
`;

const Title = styled.h1`
  color: #3d3d3d;
  font-size: 24px;
  margin: 0 0 16px;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.h2`
  color: #767676;
  font-size: 16px;
  margin: 0 0 32px;
  font-weight: 400;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const Metadata = styled.ul`
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  li {
    list-style: none;
    margin-right: 32px;
  }

  span {
    display: block;
    text-align: center;
  }

  @media (max-width: 375px) {
    justify-content: space-between;

    li {
      margin-right: 0;
    }
  }
`;

const Data = styled.span`
  font-size: 18px;
  margin: 0 0 3px;
  font-weight: 600;
`;

const Label = styled.span`
  font-size: 12px;
  color: #767676;
`;

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }), 1);
  }

  handleClick = (ev) => {
    ev.stopPropagation();
  }

  closeModal = () => {
    setTimeout(() => this.setState({ mounted: false }), 1);
    setTimeout(() => this.props.close(), 700);
  }

  render() {
    const { mounted } = this.state;

    return (
      <Overlay mounted={mounted} onClick={this.closeModal}>
        <RecipeDetails mounted={mounted} onClick={this.handleClick}>
          <CloseIcon
            icon="close"
            color="white"
            overlay={true}
            scale={1.25}
            onClick={this.closeModal}
          />
          <MainImage>
            <img src={recipeImage} />
          </MainImage>
          <Header>
            <Title>Lemon, chicken, and smashed pea pasta and some more text for a really long name</Title>
            <Subtitle>Tender meat, sweet peas and a hit of zingy citrus.</Subtitle>
            <Metadata>
              <li>
                <Data>15m</Data>
                <Label>Prep Time</Label>
              </li>
              <li>
                <Data>1:30</Data>
                <Label>Cook Time</Label>
              </li>
              <li>
                <Data>£3</Data>
                <Label>per Serving</Label>
              </li>
              <li>
                <Data>4</Data>
                <Label>Servings</Label>
              </li>
            </Metadata>
          </Header>
          <Tabs options={[
            {
              title: '4 Ingredients',
              content: <Ingredients key="ingredients"/>
            },
            {
              title: 'Details',
              content: <Details key="details" />
            },
            {
              title: 'Nutrition',
              content: null
            }
          ]}>

          </Tabs>
        </RecipeDetails>
      </Overlay>
    );
  }
}

export default RecipeModal;
