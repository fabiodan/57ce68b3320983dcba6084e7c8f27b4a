import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component
});

addDecorator(withKnobs);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
