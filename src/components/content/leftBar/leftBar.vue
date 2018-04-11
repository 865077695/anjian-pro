<style scoped lang="less">
@import "./leftBar.less";
</style>

<template>
  <div class="leftBar">
    <el-menu
      router
      default-active="/index"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.path" v-for="item in sigleItem" :key="item.path">{{item.name}}</el-menu-item>
      <el-submenu v-for="item in fatherItem" :index="item.path" :key="item.path">
        <template slot="title">
          {{item.name}}
        </template>
        <el-menu-item v-for="subItem in item.children" :index="item.path + subItem.path" :key="subItem.path">{{subItem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { anjianju } from "@/router/routes";
export default {
  name: "LeftBar",
  data() {
    return {
      name: "a",
      leftBarData: null,
      fatherItem: null
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.leftBarData = anjianju;
    this.fatherItem = this.leftBarData.filter(item => {
      return item.children;
    });
    this.sigleItem = this.leftBarData.filter(item => {
      return !item.children;
    });
  }
};
</script>
