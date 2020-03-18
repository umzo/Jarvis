<template>
  <div id="wrapper">
    <main>
      <h1>Javis</h1>
      <div class="menu__manager manager-panel">
        <h2 class="manager-panel__title">Manager</h2>
        <ul class="manager-panel__list">
          <li><router-link to="/manager/task">Task Manager</router-link></li>
        </ul>
      
      </div>

    
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
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
