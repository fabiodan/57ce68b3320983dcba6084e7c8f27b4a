# ASDA StyleGuide™
This guide uses [Storybook](storybook.js.org) to implement the ASDA Pattern Library alongside `yarn`, `react`, `webpack`, and more.

----------------

### Getting Started

Firstly, you'll need [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

1. Clone this repo
2. `yarn install` from this repo's directory
3. `yarn start` to spin up the webpack server
4. Storybook should be running on port `9001`. Visit `localhost:9001` to view the application.
5. Toggle the **Actions Panel** with `⌘⇧C`.



### Development

`index.js` is the main file that controls the "directory" of components within the `/stories` directory. Learn how to write stories on the [storybook documentation](https://storybook.js.org/basics/writing-stories/).

The `components` directory currently houses each **Component** but they can be imported into the Storybook `index` from anywhere.

A few addons have been included:
- [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) allow you to manipulate the `props` that are passed to each `component`.

- [Info][https://github.com/storybooks/storybook/tree/master/addons/info)] allows you to use [React Docgen](https://react-styleguidist.js.org/docs/documenting.html) to generate documentation via code-comments.

- View more [Storybook-supported addons](https://storybook.js.org/addons/addon-gallery/)



### Styles

On ASDA projects we use **SASS** and [BEM methodology][https://en.bem.info/methodology/quick-start/] to define the selectors.

But during the development, we had to create some exceptions (or extra rules) to avoid painful situations but still keeping some consistency on the code:



**MIXES**
BEM rules expect this convention for naming:
`block1__block2`

But sometimes you need to apply different mixes for different instances of the same block. So we
follow the convention below:
`block1__whatever-name-that-makes-sense`

Then we can do this:

```
<div class="block1">
  <div class="child block1__name1"></div>
  <div class="child block1__name2"></div>
</div>
```



**NESTED SELECTORS**
The BEM methodology allows using nested selectors, but we recommend minimizing
their use. Nested selectors increase code coupling and make reuse impossible.
Nesting is appropriate if you need to change the styles of elements relative
to the state of the block or the theme set, one level of nesting should be
enough to solve the problem.

Note: Don’t nest different block selectors, in this case use mix instead.

**Valid use cases (SASS)**

```scss
.button--primary {
  .button__text {
    color: white;
  }
}
```

We don’t consider the use of pseudo-classes or pseudo-elements as nesting, so
it’s ok to have the case below:

```scss
.button--primary {
  .button__text {
    color: white;
    &::after {
      background: black;
      opacity: 0.5;
    }
  }
}
```



### Deployment

Currently, the StyleGuide™ is deployed to [Github Pages](https://gecgithub01.walmart.com/pages/c0v0039/asda-styleguide/) using [storybook-deployer](https://github.com/storybooks/storybook-deployer).

```bash
yarn run deploy-storybook
```
