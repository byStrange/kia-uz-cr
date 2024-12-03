import Vue from 'vue';
import InputFacade from 'vue-input-facade';

// migrating from v-mask
const options = {
  // rename the directive from: v-facade to: v-mask
  //name: 'mask',

  // use these tokens instead of the default
  tokens: {
    'y': { pattern: /[1-2]/ },
    'e': { pattern: /[9|0]/ },
    '#': { pattern: /\d/ },
    'A': { pattern: /[a-z]/i },
    'N': { pattern: /[0-9a-z]/i },
    'X': { pattern: /./ }
  }
}

Vue.use(InputFacade, options)
