<template>
  <div>
    <!-- <the-header></the-header> -->
    <!-- <badge-list></badge-list> -->
    <TheHeader/>
   <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import BadgeList from './components/BadgeList'
export default {
  components:{
    TheHeader,
    BadgeList
  },
  data() {
    return {
      activeUser: {
        name: 'Mahendra Singh Dhoni ',
        description: 'Cricketer :) ',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>