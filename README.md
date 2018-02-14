# ASDA StyleGuide™
This guide uses [Storybook](storybook.js.org) to implement the ASDA Pattern Library alongside `yarn`, `react`, `webpack`, and more.

----------------

### Getting Started

Firstly, you'll need [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

1. Clone this repo
2. `yarn install` from this repo's directory
3. `npm run storybook` to spin up the webpack server
4. Storybook should be running on port `9001`. Visit `localhost:9001` to view the application.
5. Toggle the **Actions Panel** with `⌘⇧C`.

### Development

`index.js` is the main file that controls the "directory" of components within the `/stories` directory. Learn how to write stories on the [storybook documentation](https://storybook.js.org/basics/writing-stories/).
The `components` directory currently houses each **Component** but they can be imported into the Storybook `index` from anywhere.
Currently, [`styled-components`](https://www.styled-components.com/) is used for styling.

A few addons have been included:
- [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) allow you to manipulate the `props` that are passed to each `component`.
- [Info][https://github.com/storybooks/storybook/tree/master/addons/info) allows you to use [React Docgen](https://react-styleguidist.js.org/docs/documenting.html) to generate documentation via code-comments.
- A first-pass test of [Brand.ai Storybook](https://github.com/brandai/brandai-storybook) is included. It allows devs to see exported, flat images of the designs stored in the designer's Pattern Library.
You can see access these via the **Design Library** tab in the **Actions Panel** (access this with `⌘⇧C`).
- View more [Storybook-supported `addons`](https://storybook.js.org/addons/addon-gallery/)


### Deployment

Currently, the StyleGuide™ is deployed to [Github Pages](chandlervdw.com/asda-styleguide) using [storybook-deployer](https://github.com/storybooks/storybook-deployer).
```
npm run deploy-storybook
```
