<template>
  <div class="task-item task-item-add">
    <div class="task-item__action" v-on:click="someAsyncTask()">
      アクションボタン
    </div>
    <div class="task-item__action" v-on:click="hoge()">
      アクションボタン2
    </div>
    <div class="task-item__action" v-on:click="fuga()">
      アクションボタン3
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
  import { mapActions, mapState } from 'vuex';
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState({
        count: state => state.counter.main,
      }),
    },
    methods: {
      ...mapActions('counter', [
        'someAsyncTask',
      ]),
      hoge() {
        console.log(this.count);
      },
      fuga() {
        this.someAsyncTask();
      },
    },
  };
</script>

<style scoped>
</style>
