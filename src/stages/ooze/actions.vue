<template>
  <div class="action-list">

    <div class="group" v-for="(group, i) in stage.actions" v-bind:key="i">
      <div class="title">{{ group.name }}</div>

      <div class="action-group">
        <div class="action" v-for="(action, j) in group.actions" v-bind:key="j" v-bind:class="action.color">
          <button type="button" class="action-button" @click="onClick(action)">
            {{ action.name }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

const actions = {
  name: 'actions',
  props: ['stage'],
  methods: {
    onClick(action){
      action.execute();
    }
  }
}

export { actions }
export default actions
</script>

<style scoped>
  .action-list {
    margin-top: 1rem;
  }

  .group > .title {
    font-family: "Ubuntu";
    color: #7ea6ff;
    font-weight: 600;
    padding-bottom: .2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ffffff;
    text-transform: capitalize;
  }

  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;
  }

  .action:last-child {
    margin-right: 0;
  }

  .action button {
    color: white;
    background-color: #333;
    border: 1px solid black;
    padding: .5rem 1rem;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .action.green button {
    background-color: #00ff0033;
    border: 1px solid #00ff00;
  }

  .action.green button:hover {
    background-color: #00ff007d;
  }

  .action.red button {
    background-color: #ff00003b;
    border: 1px solid red;
  }

  .action.red button:hover {
    background-color: #ff000075;
  }
</style>
