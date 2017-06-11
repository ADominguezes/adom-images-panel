# \<adom-images-panel\>

Is a component that can shows two different elements, an accordion, or a carrousel.

## Type of component

this is depend of the property `type` that can be set as `accordion` or `carrousel`. By default, the property `type` is set as __accordion__

__example__

```html
<adom-images-panel type="carrousel" icon-navigation="icons:chevron-left">
</adom-images-panel>
```

If type is set as `carrousel`, it´s possible add an icon for left and right navigation, with the property `iconNavigation`.

With the property `items`, set the items for the component visualization.

This is the object for set the property __items__.

```js
var items=[
  {
    heading: 'titulo 2',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsam, atque architecto deserunt obcaecati',
    background: 'http://lorempixel.com/800/400/people/2/',
    href: 'https://facebook.com',
    target: '_blank'
  },
  {
    heading: 'titulo 3',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsam, atque architecto deserunt obcaecati',
    background: 'http://lorempixel.com/800/400/city/1/',
    href: 'https://twitter.com',
    target: '_blank'
  }]
```

the __max number of item for show is 12__

## customizable

By default the component has a content for the items, it´s possible custom the component slides with a new design, for that you can use slot for change it.

With the property `defaultId` it´s possible change the id for this slots, by default the value is `content`, after, it´s neccessary add div with a id set in the object `items`.

__example__

```html
<adom-image-panel type="accordion" default-id="slide">
  <div slot="slide0">
    // slide is the defaultId, and 0 is the id set in items.
    My custom slide
  </div>
  <div slot="slide1">
    My custom slide
  </div>
</adom-image-panel>
```

````js
var items=[
  {
    id: 0,
    background: 'http://lorempixel.com/800/400/people/2/',
    href: 'https://facebook.com',
    target: '_blank'
  },
  {
    id: 1,
    background: 'http://lorempixel.com/800/400/city/1/',
    href: 'https://twitter.com',
    target: '_blank'
  }]
```

## Styling

The following custom properties and mixins are available for styling:

### Styling for accordion

Custom property                                                 | Description                       | Default     |
----------------------------------------------------------------|-----------------------------------|-------------|
--adom-images-panel-type-accordion                              | empty mixin for :host accordion   | {}          |
--adom-images-panel-accordion-bg-color                          | color for .accordion              | #121212     |
--adom-images-panel-accordion                                   | empty mixin for .accordion        | {}          |
--adom-images-panel-accordion-item                              | empty mixin for .item             | {}          |
--adom-images-panel-accordion-item-content                      | empty mixin for .content          | {}          |
--adom-images-panel-accordion-item-content-info-bg-color        | background color for .info        | #000        |
--adom-images-panel-accordion-item-content-info                 | empty mixin for .info             | #000        |
--adom-images-panel-accordion-item-content-info-title-color     | color for .title                  | {}          |
--adom-images-panel-accordion-item-content-info-title           | empty mixin for .title            | {}          |
--adom-images-panel-accordion-item-content-info-paragraph-color | color for .paragraph              | #999        |
--adom-images-panel-accordion-item-content-info-paragraph       | empty mixin for .paragraph        | {}          |
--adom-images-panel-accordion-item-hover                        | empty mixin for .item hover       | {}          |
--adom-images-panel-accordion-item-focus                        | empty mixin for .item focus       | {}          |

### Styling for carrousel

Custom property                                                 | Description                       | Default     |
----------------------------------------------------------------|-----------------------------------|-------------|
--adom-images-panel-type-carrousel                              | empty mixin for :host carrousel   | {}          |
--adom-images-panel-navigation-bg                               | background for .navigation        | transparent |
--adom-images-panel-navigation                                  | empty mixin for .navigation       | {}          |
--adom-images-panel-navigation-icon                             | empty mixin for .icon             | {}          |
--adom-images-panel-navigation-icon-right                       | empty mixin for .right            | {}          |
--adom-images-panel-navigation-right                            | empty mixin for .navigation-right | {}          |
--adom-images-panel-carrousel-bg-color                          | color for .carrousel              | #121212     |
--adom-images-panel-carrousel                                   | empty mixin for .carrousel        | {}          |
--adom-images-panel-carrousel-item                              | empty mixin for .item             | {}          |
--adom-images-panel-carrousel-item-content                      | empty mixin for .content          | {}          |
--adom-images-panel-carrousel-item-content-info-bg-color        | background color for .info        | #000        |
--adom-images-panel-carrousel-item-content-info                 | empty mixin for .info             | #000        |
--adom-images-panel-carrousel-item-content-info-title-color     | color for .title                  | {}          |
--adom-images-panel-carrousel-item-content-info-title           | empty mixin for .title            | {}          |
--adom-images-panel-carrousel-item-content-info-paragraph-color | color for .paragraph              | #999        |
--adom-images-panel-carrousel-item-content-info-paragraph       | empty mixin for .paragraph        | {}          |
--adom-images-panel-carrousel-item-hover                        | empty mixin for .item hover       | {}          |
--adom-images-panel-carrousel-item-focus                        | empty mixin for .item focus       | {}          |

## Serving your Application

You can serve your application with:

    $ gulp serve

## Building Your Application

The application goes building while you build your application, you can check your application in `dist` folder.
