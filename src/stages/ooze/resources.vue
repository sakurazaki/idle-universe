<template>
  <div class="resources" v-if="game.resources">
    <div class="title">Resources</div>
    <div class="resource" v-for="res in game.resources" :key="res.identifier">
      <div class="name">{{ res.name }}</div>
      <div class="value">{{ numberToFixated(res.value) }}</div>
      <div class="storage" v-if="res.all_storage != 0">{{ res.all_storage }}</div>
      <div class="no-storage" v-if="res.all_storage == 0"></div>
      <div class="rps" v-if="res.has_rps">{{ res.rps - res.dps }}</div>
      <div class="no-rps" v-if="!res.has_rps">&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Resources',
  props: ['game'],
  data() {
    return {
      popperShow: false,
      popperDesc: '',
      popperRef: null,
      popperHTML: false
    };
  },
  methods: {
    showPopper(action, row, index){
      this.popperDesc = action.description;
      this.popperRef = `action-${row}_${index}`;
      this.popperHTML = action.ishtml;
    },
    hidePopper(){
      this.popperDesc = '';
      this.popperRef = null;
      this.popperHTML = false;
    },
    numberToFixated(val){
    val = Math.floor(val) + ''; // coerce to string
    if (val < 1000) {
      return val; // return the same number
    }
    if (val < 10000) { // place a comma between
      return val.charAt(0) + ',' + val.substring(1);
    }
    // divide and format
    return (val/1000).toFixed(val % 1000 != 0)+'k';
  }
  }
}
</script>

<style lang="less" scoped>
.resources {
  display: flex;
  flex-flow: row wrap;
  gap: .3rem;

  > .title {
    flex: 1 1 100%;
    font-family: "Ubuntu";
    color: #f3c82d;
    font-weight: 600;
    padding-bottom: .2rem;
    margin-bottom: .5rem;
    border-bottom: 1px solid #ffffff;
    text-transform: capitalize;
  }

  > .resource {
    flex: 1 1 48%;
    background-color: #ffa50038;
    border: 1px solid darkorange;
    border-radius: 5px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    > .name {
      flex: 1 1 100%;
      text-align: center;
      padding: 0.1rem;
      margin-bottom: 0.3rem;
      border-bottom: 1px solid orange;
      font-weight: 700;
      background-color: #ff8c0066;
    }

    > .value {
      flex: 1 1 33%;
      font-size: 250%;
      padding: 0 0.5rem;
      box-sizing: border-box;
    }

    > .storage {
      flex: 1 1 33%;
      font-size: 150%;
      padding: 0 0.5rem;
      box-sizing: border-box;
      text-align: right;

      &:before {
        content: '/ ';
      }
    }

    > .rps {
      flex: 1 1 33%;
      font-size: 150%;
      padding: 0 0.5rem;
      box-sizing: border-box;
      text-align: right;

      &:after {
        content: ' /s';
        font-size: 75%;
      }
    }

    > .no-rps,
    > .no-storage {
      flex: 1 1 33%;
    }
  }
}
</style>
