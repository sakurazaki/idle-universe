<template>
  <header id="header" class="header">
  <div class="universe-header">
    <div class="race-name" v-bind:style="{color: game.race.color}" v-html="game.race.icon + ' ' + game.race.name"></div>
    <div class="planet-name"><i class="bi bi-globe"></i> {{ game.planet.name }}</div>
    <div class="universe-name"><i class="bi bi-box"></i> {{ game.universe.name }}</div>
  </div>
  <div class="progress-header">
    Progress
  </div>
    <div class="settings-header">
      <a href="https://github.com/sakurazaki/idle-universe">Github</a> |
      <a href="https://discord.gg/R2FsdNn29A">Discord</a>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Header',
  props: ['game']
}
</script>
