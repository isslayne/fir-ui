<template>
  <div styleName="@activity-indicator $size" v-if="localVisible">
    <Icon styleName="loading" name="loading" />
    <div styleName="tip" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script>
import CSSModules from 'vue-css-modules'
import { toggleVisibility } from '../_mixins'
import Icon from '../Icon/Icon.vue'

export default {
  name: 'FActivityIndicator',

  inject: {
    ActivityIndicatorStyles: {
      default: () => ({})
    }
  },

  mixins: [
    toggleVisibility(true, true),
    CSSModules('ActivityIndicatorStyles')
  ],

  props: {
    size: {
      type: String,
      enum: ['sm', 'lg']
    }
  },

  components: { Icon }
}
</script>
