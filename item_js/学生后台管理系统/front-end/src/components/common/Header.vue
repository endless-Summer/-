<template>
  <div class="header">
  <el-header>
    <div class="title">管理系统</div>
    <div>嘉楠</div>
  </el-header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.header el-header{
  background: #409eff;
  color: #fff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.header el-header .title{
  width:200px;
  font-size: 24px;
}
</style>
