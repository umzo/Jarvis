<template>
  <div class="task-item task-item-add">
    <div class="task-item__action" v-on:click="hoge()">
      アクションボタン
    </div>
    <div class="task-item__title">
      ダミータイトル
    </div>
    <div class="task-item__parts">
      Computed reversed message: "{{ count }}"
    </div>
    <div class="task-item__parts">
    </div>
    <div class="task-item__status">
    </div>
  </div>
</template>

<script>
  // import TaskItemAdd from './Task/Item/';
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
      };
    },
    computed: {
      count() {
        return this.$store.state.Counter.main;
      },
      // ...mapState('Counter', { main: state => state.main }),
    },
    methods: {
      hoge() {
        console.log(this.someAsyncTask);
      },
      ...mapActions({ someAsyncTask: 'Counter/someAsyncTask' }),
    },
  };
</script>

<style scoped>
</style>
