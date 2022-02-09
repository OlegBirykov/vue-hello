<template>
  <ul class="todo-list">
    <TodoListItem
      v-for="(item, i) in listItems"
      :key="i"
      :TodoListItem="item"
      :DoneUndoneX="DoneUndone">
      {{item}}
    </TodoListItem>
  </ul>
</template>

<style lang="scss" src="./TodoList.scss"></style>

<script>
  import TodoListItem from './TodoListItem/TodoListItem.vue';

  export default {
    name: 'TodoList',

    props: {
      TodoListItems: Array,
      DoneUndone: Function,
      DeleteItem: Function
    },

    data() {
      return {
        listItems: this.TodoListItems,
        DoneUndone_: this.DoneUndone
      }
    },

    created() {
    },

    components: {
      TodoListItem
    }
  }
</script>