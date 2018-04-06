<template>
  <div class="content">
    <LeftBar />
    <div class="right-content">
      <TopBar />
      <Main />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/content/topBar/topBar";
import LeftBar from "@/components/content/leftBar/leftBar";
import Main from "@/components/content/main/main";
export default {
  name: "Content",
  components: {
    TopBar,
    LeftBar,
    Main
  }
};
</script>

<style scoped>
.content {
  display: flex;
  height: 100%;
}
.right-content {
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}
.leftBar {
  flex: 0 1 200px;
  height: 100%;
}
.topBar {
  line-height: 60px;
}
.main {
  flex: 1 1 auto;
}
</style>

