<template>
  <div class="article-container">
    <!--  文章标题-->
    <div class="head-box">
      <slot name="title" msg="hi slot"></slot>
    </div>
    <!-- 文章内容 -->
    <div class="content-box">
      <slot name="content" msg="别看我，没结果" :user="userinfo"></slot>
    </div>

    <!-- 文章作者 -->
    <div class="footer-box"><slot name="writter"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      userinfo: {
        name: "王腾",
        age: 25,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
  .head-box {
    background-color: lightcoral;
  }
  .content-box {
    background-color: pink;
  }
  .footer-box {
    background-color: aqua;
  }
}
</style>
