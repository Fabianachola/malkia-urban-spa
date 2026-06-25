<template>
  <MainLayout />
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
};
</script>

<style>
/* Global reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fafafa;
  color: #333;
}

a {
  text-decoration: none;
}
</style>