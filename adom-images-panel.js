(function () {
  'use strict';
  Polymer({

    is: 'adom-images-panel',

    properties: {
      items: {
        type: Array,
        value: function () {
          return [];
        },
        observer: '_computeItems'
      },
      columns: {
        type: Number,
        reflectToAttribute: true
      },
      type: {
        type: String,
        value: 'accordion',
        reflectToAttribute: true
      },
      height: {
        type: Number,
        value: 400
      }
    },
    _computeItems: function () {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].id = i
      }
      this.columns = this.items.length;
    }

  });
}());
