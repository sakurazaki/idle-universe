<template>
  <div class="evolution-bar">
    <div class="green-bar" v-bind:style="{width: getPlantWidth() + '%'}"></div>
    <div class="red-bar" v-bind:style="{width: getProtoWidth() + '%'}"></div>
  </div>
  <div class="progress-bar">
    <div class="blue-bar" v-bind:class="{complete: getTotalWidth() == 100}" v-bind:style="{width: getTotalWidth() + '%'}"></div>
  </div>
</template>

<script>

const evolution_bar = {
  name: 'evolution',
  props: ['stage'],
  methods: {
    getPlantWidth(){
      return this.stage.plants_eaten * 2;
    },
    getProtoWidth(){
      return this.stage.proto_killed * 2;
    },
    getTotalWidth(){
      return Math.min( ( (this.stage.plants_eaten+this.stage.proto_killed) / this.stage.evo_1_progress) * 100, 100);
    }
  }
}

export { evolution_bar }
export default evolution_bar
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

  .evolution-bar > .green-bar {
    display: inline-block;
    background-color: #00ff0066;
    height: 26px;
    min-height: 26px;
    border: 1px solid #00ff00;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 0;
  }

  .evolution-bar > .red-bar {
    margin-left: auto;
    display: inline-block;
    background-color: #ff000059;
    height: 26px;
    min-height: 26px;
    border: 1px solid red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0;
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

  .progress-bar > .blue-bar {
    display: inline-block;
    background-color: #008ed1;
    height: 14px;
    min-height: 14px;
    border-bottom-left-radius: 5px;
  }

  .progress-bar > .blue-bar.complete {
    animation: shine 1s linear 0s infinite;
  }

  @keyframes shine {
    0%{background-color: #008ed1;}
    50%{background-color: #6e00ff;}
    100%{background-color: #008ed1;}
  }
</style>
