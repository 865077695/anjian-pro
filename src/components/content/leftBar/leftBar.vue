<template>
  <div class="leftBar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="11">
        <template slot="title">
          分组0
        </template>
        <el-menu-item index="11-1">asd</el-menu-item>
        <el-menu-item index="11-2">asd</el-menu-item>
        <el-menu-item index="11-3">asd</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">hahas</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
  data() {
    return {
      name: "a"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
