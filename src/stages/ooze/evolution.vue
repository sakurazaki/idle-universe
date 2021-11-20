<template>
  <div id="evolution-species" class="evolution-species">
    <div class="header">Evolution status</div>
    <div class="evolution-list">
      <div class="gene" v-bind:class="gene.types" v-for="gene in race.genes" v-bind:key="gene.identifier">
        <div class="name">{{ gene.name }}</div>
        <div class="types">{{ gene.types.map(type => type && type[0].toUpperCase() + type.slice(1)).join(", ") }}</div>
        <div class="description">{{ gene.description }}</div>
        <div v-if="gene.effects" class="effects">
          <div class="effect" v-for="(effect, i) in gene.effects" :key="i" :class="effect.color">
            {{ effect.description }}
          </div>
        </div>
        <div v-if="gene.special" class="special" 
          v-bind:class="{
            neutral: gene.power == 0,
            good: gene.power > 0 && gene.power <= 6,
            blessing: gene.power > 6,
            bad: gene.power < 0 && gene.power >= -6,
            curse: gene.power < -6}">
          {{ gene.special }}
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

<style lang="less" scoped>
.evolution-species {
  background: #39224e;
  border: 1px solid #a3a3a3;
  border-radius: 5px;

  > .header {
    padding: 0.5rem 1rem;
    background-color: #1c0134;
    border-bottom: 1px solid #898989;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Oxygen";
    font-size: 115%;
  }

  > .evolution-list {
    padding: 0.5rem 1rem;
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.5rem;

    .gene {
      flex: 1 1 auto;
      border-radius: 8px;
      padding: .5rem 1rem;

      &.base {
        background-color: #7c722338;
        border: 2px solid #ffe835;
      }

      > .name {
        font-weight: 700;
      }

      > .types {
        color: orange;
        margin-bottom: .5rem;
      }

      > .description {
        margin-bottom: .5rem;
      }

      > .effects {
        margin-bottom: .5rem;

        > .effect {
          &.green {
            color: #42ff42;
          }
          &.red {
            color: #a859ff;
          }
        }
      }

      > .special {
        &.neutral {
          color: #25ffff;
        }
        &.good {
          color: #42ff42;
        }
        &.blessing {
          color: #ffdf31;
        }
        &.bad {
          color: #ff5c5c;
        }
        &.curse {
          color: #a859ff;
        }
      }

    }
  }
}
</style>
