<template>
  <div class="evolution-bar">
    <div class="green-bar" v-bind:style="{width: stage.plants_eaten + '%'}"></div>
    <div class="red-bar" v-bind:style="{width: stage.proto_killed + '%'}"></div>
  </div>
  {{ stage.plants_eaten }} {{ stage.proto_killed }}
</template>

<script>

const evolution_bar = {
  name: 'evolution',
  props: ['stage']
}

export { evolution_bar }
export default evolution_bar
</script>

<style scoped>
  .evolution-bar {
    width: 100%;
    height: 28px;
    min-height: 28px;
    background: #30223a;
    border: 1px solid white;
    border-radius: 5px;
    padding: 1px;
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
    float: right;
    display: inline-block;
    background-color: #ff000059;
    height: 26px;
    min-height: 26px;
    border: 1px solid red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0;
  }
</style>
