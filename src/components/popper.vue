<template>
  <div v-if="ishtml" ref="dropdown" id="tooltip" role="tooltip" class="popover-custom" v-html="desc"></div>
  <div v-if="!ishtml" ref="dropdown" id="tooltip" role="tooltip" class="popover-custom">{{ desc }}</div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: 'PopperTooltip',
  props: ['open', 'refEl', 'desc', 'offset', 'ishtml'],
  data() {
    return {
      // eslint-disable-next-line no-unused-labels
      tooltip: null
    }
  },
  mounted(){
    this.$nextTick(function() {
      this.tooltip = new Popper(this.refEl, this.$refs["dropdown"], {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, this.offset],
            },
          },
        ],
      });
      this.tooltip.update();
    });
  }
}
</script>

<style scoped>
  #tooltip {
    background-color: #fff;
    color: #222;
    padding: .75rem 1rem;
    border-radius: 4px;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 22px;
    height: 22px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
    z-index: -1;
  }

  #arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  #tooltip[x-placement^='top'] > #arrow {
    bottom: -4px;
  }

  #tooltip[x-placement^='bottom'] {
    top: 13px !important;
  }

  #tooltip[x-placement^='bottom'] > #arrow {
    top: -3px;
    left: 50%;
  }

  #tooltip[x-placement^='left'] > #arrow {
    right: -4px;
  }

  #tooltip[x-placement^='right'] > #arrow {
    left: -4px;
  }
</style>
