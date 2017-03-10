/**
 * Created by luis on 3/10/17.
 */
import 'vue-material/dist/vue-material.css';
import VueMaterial from 'vue-material';
import EventManagerMixin from 'mixins/EventManagerMixin';

Vue.use(VueMaterial);

export default Vue.extend({

  mixins: [ EventManagerMixin ],

  template: require( './template.html' ),

  emitterEvents: [],

  domEvents: [],

  data() {

    return {
      _hidden: null
    };
  },

  ready() {},

  methods: {},

  transitions: {},

  components: {}
});