<script>
import CSSModules from 'vue-css-modules'
import Messenger from 'vue-messenger'
import Icon from '../Icon/Icon.vue'

export default {
  name: 'FButton',

  inject: {
    ButtonStyles: {
      default: () => ({})
    }
  },

  mixins: [
    Messenger,
    CSSModules('ButtonStyles')
  ],

  props: {
    type: {
      type: String,
      enum: ['default', 'primary', 'ghost', 'warning']
    },
    size: {
      type: String,
      enum: ['lg', 'sm']
    },
    icon: String,
    disabled: Boolean,
    inline: Boolean
  },

  computed: {
    IconNode() {
      return this.icon ? <Icon
        name={this.icon}
        size={this.size === 'lg' ? 'md' : 'xxs'}
        styleName="icon"
      /> : null
    }
  },

  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  },

  render() {
    return <a styleName="@button $type $size :inline :disabled" onClick={this.handleClick}>
      {this.IconNode}
      {this.$slots.default}
    </a>
  }
}
</script>
