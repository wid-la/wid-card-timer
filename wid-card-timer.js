'use strict';

(function () {

  Polymer({

    is: 'wid-card-timer',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      title: {
        type: String,
        value: 'Title'
      },

      value: {
        type: String
      },

      description: {
        type: String,
        value: 'description'
      },

      countType: {
        type: String
        /* up OR down */
      }
    },

    _timeValue: function _timeValue(serverdate) {
      var date = new Date(serverdate + ' UTC');
      var now = new Date().getTime();

      var timeDiff = this.countType === 'up' ? now - date.getTime() : date.getTime() - now;

      return this.timeSince(timeDiff);
    },

    timeSince: function timeSince(delta) {
      delta = delta / 1000; //us to s

      var min, hou, sec, days;

      if (delta <= 59) {
        return delta + ' s';
      }

      if (delta >= 60 && delta <= 3599) {
        min = Math.floor(delta / 60);
        sec = delta - min * 60;

        return min + ' m'; // + ' ' + sec + ' s';
      }

      if (delta >= 3600 && delta <= 86399) {
        hou = Math.floor(delta / 3600);
        min = Math.floor((delta - hou * 3600) / 60);

        return hou + ' h'; // + ' ' + min + ' m';
      }

      if (delta >= 86400) {
        days = Math.floor(delta / 86400);
        hou = Math.floor((delta - days * 86400) / 60 / 60);

        return days + ' d'; // + ' ' + hou + ' h';
      }
    },

    _themeChangedCard: function _themeChangedCard(themeName) {
      console.log('Time Theme : ', themeName, ' Tag : ', this.themeTag);
      if (themeName === 'xmass' && this.themeTag === 'gift') {
        var wrappingImg = document.createElement('img');
        wrappingImg.src = '/images/themes/xmass/wrapping_paper.png';
        wrappingImg.setAttribute('class', 'wrapping_paper');
        Polymer.dom(this.$.header).appendChild(wrappingImg);

        var ribbonImg = document.createElement('img');
        ribbonImg.src = '/images/themes/xmass/ribbon.png';
        ribbonImg.setAttribute('class', 'ribbon');
        Polymer.dom(this.$.mainContent).appendChild(ribbonImg);
      }
    }

  });
})();