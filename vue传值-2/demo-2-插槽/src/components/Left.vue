<template>
  <div class="left-container">
    <h2>Left组件</h2>
    <hr />
    <slot name="default"> <h3>这是组件Left通过插槽slot声明的后备 内容</h3></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
