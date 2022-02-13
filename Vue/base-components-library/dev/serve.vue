<template>
  <div id="app">
    <base-components-library-sample />
    <BaseButton name="Button Name"  :onClick="onClick" />
  </div>
</template>

<script>
// reference https://github.com/team-innovation/vue-sfc-rollup/pull/91 for not being able to start the serve out of the box
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { BaseComponentsLibrarySample } from '@/entry.esm';
import { BaseButton } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
   BaseComponentsLibrarySample,
   BaseButton
  },
  methods: {
    onClick() {
      console.log("Button was clicked!");
    }
  }
});
</script>