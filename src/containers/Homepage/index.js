'use strict';

import './styles.scss';

import EventManagerMixin from 'mixins/EventManagerMixin';
import FadeTransitionMixin from 'mixins/FadeTransitionMixin';

import {
  WINDOW_RESIZE
} from 'config/messages';

import CardComponent from 'components/CardComp';

import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

export default Vue.extend({

  mixins: [ EventManagerMixin, FadeTransitionMixin ],

  template: require( './template.html' ),

  emitterEvents: [{
    message: WINDOW_RESIZE,
    method: 'onWindowResize'
  }],

  data() {

    return {
      _hidden: null
    };
  },

  created() {

  },

  methods: {

    onWindowResize( {width, height} ) {
      /*eslint-disable */
      console.log( `Window resize from application with debounce -> width: ${width}px || height: ${ height }` );
      /*eslint-enable */
    }

  },

  components: {
    'example-component': CardComponent
  }
});
