<template>
  <div id="oozestage" class="oozestage">

    <div id="evolution-stats" class="evolution">
      <evolution :race="game.race" />
    </div>

    <div id="actions" class="actions">
      <evolution_bar :stage="game.stage" />
      <actions :stage="game.stage" />
    </div>

    <div id="info" class="info">
a
    </div>

  </div>
</template>

<script>
  
import { evolution } from './evolution'
import { evolution_bar } from './progress'
import { actions } from './actions'

const OozeStage = {
  name: 'OozeStage',
  props: ['game'],
  components: {
    evolution,
    evolution_bar,
    actions
  }
}

export { OozeStage }
export default OozeStage
</script>

<style scoped>
</style>
