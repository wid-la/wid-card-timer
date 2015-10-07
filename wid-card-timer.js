'use strict';

(function () {

  Polymer({

    is: 'wid-card-timer',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * title
       * @type {String}
       */
      title: {
        type: String,
        value: 'Title'
      },

      /**
       * value
       * @type {String}
       */
      value: {
        type: String,
        value: 30
      },

      /**
       * description
       * @type {String}
       */
      description: {
        type: String,
        value: 'description'
      }
    },

    _timeValue: function _timeValue(value) {
      return value + ' h';
    }

  });
})();