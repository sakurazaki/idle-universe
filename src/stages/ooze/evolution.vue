<template>
  <div id="evolution-species" class="evolution-species">
    <div class="header">Evolution status</div>
    <div class="evolution-list">
      <div class="gene" v-bind:class="gene.types" v-for="gene in race.genes" v-bind:key="gene.identifier">
        <div class="name">{{ gene.name }}</div>
        <div class="types">{{ gene.types.map(type => type && type[0].toUpperCase() + type.slice(1)).join(", ") }}</div>
        <div class="description">{{ gene.description }}</div>
        <div class="effect" 
          v-bind:class="{
            neutral: gene.power == 0,
            good: gene.power > 0 && gene.power <= 6,
            blessing: gene.power > 6,
            bad: gene.power < 0 && gene.power >= -6,
            curse: gene.power < -6}">
          {{ gene.effect }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Evolution',
  props: ['race']
}
</script>

<style scoped>
</style>
