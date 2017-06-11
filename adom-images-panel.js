(function () {
  'use strict';
  Polymer({

    is: 'adom-images-panel',

    properties: {
      /**
       * Array with items
       */
      items: {
        type: Array,
        value: function () {
          return [];
        },
        observer: '_computeItems'
      },
      /**
       * Number of columns in accordion
       */
      columns: {
        type: Number,
        reflectToAttribute: true
      },
      /**
       * Type of panel to show: accordion | carrousel
       */
      type: {
        type: String,
        value: 'accordion',
        reflectToAttribute: true
      },
      /**
       * Total heigth of panel
       */
      height: {
        type: Number,
        value: 400
      },
      /**
       * show an icon for left and right navigation
       */
      iconNavigation: {
        type: String
      },
      /**
       * set the selected image for carrousel type
       */
      selected: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
        observer: '_computeSelected'
      }
    },
    _computeItems: function () {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].id = i
      }
      this.columns = this.items.length;
      if ((this.type) && (this.type === 'carrousel')) {
        this._computeSelected();
      }
    },
    _computeSelected: function () {
      if ((this.selected === (this.items.length - 1)) || ((this.type === 'accordion'))) {
        this.$.next.hidden = true;
      } else {
        this.$.next.hidden = false;
      }
      if ((this.selected === 0) || (this.type === 'accordion')) {
        this.$.before.hidden = true;
      } else {
        this.$.before.hidden = false;
      }
    },
    _beforeButton: function () {
      if (this.selected !== 0) {
        this.selected = this.selected - 1;
        this._translateCarrousel();
      }
    },
    _nextButton: function () {
      if (this.selected !== this.items.length) {
        this.selected = this.selected + 1;
        this._translateCarrousel();
      }
    },
    _translateCarrousel: function () {
      var translate = (100 / this.columns) * this.selected;
      this.$.organizer.style = "transform: translateX(-" + translate + "%)"
    }

  });
}());
