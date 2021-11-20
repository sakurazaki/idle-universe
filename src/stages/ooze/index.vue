<template>
  <div id="oozestage" class="oozestage">

    <div id="evolution-stats" class="evolution">
      <Evolution :race="game.race" />
    </div>

    <div id="actions" class="actions">
      <EvolutionBar v-if="game.stage.show_progress" :stage="game.stage" />
      <Actions :stage="game.stage" />
    </div>

    <div id="info" class="info">
      <Resources :game="game" />
    </div>

  </div>
</template>

<script>
  
import Evolution from './evolution'
import EvolutionBar from './progress'
import Actions from './actions'
import Resources from './resources'

export default {
  name: 'OozeStage',
  props: ['game'],
  components: {
    Evolution,
    EvolutionBar,
    Actions,
    Resources
  }
}
</script>
