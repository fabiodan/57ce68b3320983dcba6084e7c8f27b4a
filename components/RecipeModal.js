import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  background: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeDetails = styled.div`
  background: #fff;
  border-radius: 8px;
  color: #3d3d3d;
  padding: 30px;
  z-index: 101;
  position: relative;
  max-width: 600px;
`;

const RecipeModal = ({ close, isOpen }) => (
  <Overlay onClick={close}>
    <RecipeDetails>
      Here we are!
    </RecipeDetails>
  </Overlay>
);

export default RecipeModal;
