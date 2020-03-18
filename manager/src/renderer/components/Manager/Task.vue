<template>
  <div id="wrapper">
    <main>
      <h1>Task Manager</h1>
      <task-item-add></task-item-add>
      <task-item-running></task-item-running>
      <task-item-tasklist></task-item-tasklist>
    </main>
  </div>
</template>

<script>
  import TaskItemAdd from './Task/Item/Add';

  export default {
    name: 'manager-task',
    components: { TaskItemAdd },
    methods: {
    //   open(link) {
    //     this.$electron.shell.openExternal(link);
    //   },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

</style>
