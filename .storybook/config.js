import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
