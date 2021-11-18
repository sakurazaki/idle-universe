<template>
  <Header :game="game" />
  <OozeStage :game="game" />
</template>

<script>
import { get_game } from './game/main'

import Header from './components/header'
import OozeStage from './stages/ooze/index'

export default {
  name: 'App',
  components: {
    Header,
    OozeStage
  },
  data: function () {
    return {
      game: get_game()
    }
  }
}
</script>

<style>
</style>
