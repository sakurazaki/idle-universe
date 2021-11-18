<template>
  <div class="evolution-bar">
    <div class="bar" v-for="(bar, i) in stage.progress.bars" v-bind:key="i" v-bind:class="bar.color"
      v-bind:style="{width: getBarWidth(i) + '%'}"></div>
  </div>
  <div class="progress-bar">
    <div class="bar blue" v-bind:class="{complete: stage.progress.progress.complete()}"
      v-bind:style="{width: stage.progress.progress.cb() + '%'}"></div>
  </div>
</template>

<script>

export default {
  name: 'EvolutionBar',
  props: ['stage'],
  methods: {
    getBarWidth(index){
      return this.stage.progress.bars[index].cb();
    }
  }
}
</script>

<style scoped>
  .evolution-bar {
    display: flex;
    width: 100%;
    height: 28px;
    min-height: 28px;
    background: #30223a;
    border: 1px solid white;
    border-radius: 5px;
    padding: 1px;
    overflow: hidden;
    white-space: nowrap;
  }

  .evolution-bar > .bar {
    display: inline-block;
    height: 26px;
    min-height: 26px;
  }

  .evolution-bar > .bar:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 0;
  }

  .evolution-bar > .bar:not(:first-child) {
    border-right: 0;
    border-left:  0;
  }

  .evolution-bar > .bar:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0;
  }

  .evolution-bar > .bar.green {
    background-color: #00ff0066;
    border: 1px solid #00ff00;
  }

  .evolution-bar > .bar.red {
    background-color: #ff000059;
    border: 1px solid red;
  }

  .evolution-bar > .bar.blue {
    background-color: #008ed159;
    border: 1px solid blue;
  }

  .progress-bar {
    width: 98%;
    margin-left: 10px;
    margin-top: -3px;
    z-index: -1;
    height: 14px;
    min-height: 14px;
    background: #255f7a75;
    border: 1px solid white;
    border-top: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 1px;
  }

  .progress-bar > .bar {
    display: inline-block;
    height: 14px;
    min-height: 14px;
    border-bottom-left-radius: 5px;
  }

  .progress-bar > .bar.blue {
    background-color: #008ed1;
  }

  .progress-bar > .bar.blue.complete {
    animation: shine 1s linear 0s infinite;
  }

  @keyframes shine {
    0%{background-color: #008ed1;}
    50%{background-color: #6e00ff;}
    100%{background-color: #008ed1;}
  }
</style>
