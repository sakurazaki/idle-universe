<template>
  <div class="action-list">

    <div class="group" v-for="(group, i) in stage.actions" v-bind:key="i">
      <div class="title">{{ group.name }}</div>
      <div v-if="group.description" class="description" v-html="group.description"></div>
  
      <div class="action-group">
        <div class="action" v-for="(action, j) in group.actions" v-bind:key="`action-${i}_${j}`"
          v-bind:class="[action.disabled ? 'disabled' : action.color]">
          <button type="button" :ref="`action-${i}_${j}`" class="action-button" @click="onClick(action)"
            @mouseover="showPopper(action, i, j)" @mouseleave="hidePopper()">
            {{ action.name }}
          </button>
        </div>
      </div>

    </div>

    <Popper v-if="popperRef" :refEl="$refs[popperRef]" :desc="popperDesc" :ishtml="popperHTML" />
    
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Actions',
  props: ['stage'],
  data() {
    return {
      popperShow: false,
      popperDesc: '',
      popperRef: null,
      popperHTML: false
    };
  },
  methods: {
    showPopper(action, row, index){
      this.popperDesc = action.description;
      this.popperRef = `action-${row}_${index}`;
      this.popperHTML = action.ishtml;
    },
    hidePopper(){
      this.popperDesc = '';
      this.popperRef = null;
      this.popperHTML = false;
    },
    onClick(action){
      if(!action.disabled)
        action.execute();
    }
  }
}
</script>

<style scoped>
  .action-list {
    margin-top: 1rem;
  }

  .group {
    margin-top: 1rem;
  }

  .group:first-child {
    margin-top: 0;
  }

  .group > .title {
    font-family: "Ubuntu";
    color: #f3c82d;
    font-weight: 600;
    padding-bottom: .2rem;
    margin-bottom: .5rem;
    border-bottom: 1px solid #ffffff;
    text-transform: capitalize;
  }

  .group > .description {
    font-family: "Ubuntu";
    margin-bottom: 1rem;
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

  .action.blue button {
    background-color: #005aff3b;
    border: 1px solid #0089ff;
  }

  .action.blue button:hover {
    background-color: #003eb1;
  }

  .action.grad-gr button {
    background: linear-gradient(153deg, rgb(0 255 0 / 46%) 0%, rgb(255 0 0 / 44%) 100%);
    border: 1px solid gold;
  }

  .action.grad-gr button:hover {
    background: linear-gradient(153deg, rgba(0,255,0,1) 0%, rgba(255,0,0,1) 100%);
  }

  .action button.disabled {
    color: white;
    background-color: #222;
    border: 1px solid black;
    text-decoration: line-through;
  }

  .action button.disabled {
    color: white;
    background-color: #222;
    border: 1px solid black;
    text-decoration: line-through;
  }
</style>
