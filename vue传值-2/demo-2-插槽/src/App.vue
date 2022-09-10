<template>
  <div id="app">
    <h1 v-color="color">APP根组件</h1>
    <p v-color="'pink'">测试v-color的使用</p>
    <hr />
    <button @click="color = 'lightgreen'">改变h1的颜色</button>
    <hr />
    <div class="son">
      <!-- <Left>
        <template v-slot:default>
          <div>
            <h3>这是组件Left通过插槽slot声明的 内容，p标签的内容</h3>
          </div>
        </template>
      </Left> -->
    </div>

    <Article>
      <template #title="scope">
        <h3 v-color="'pink'">article使用v-color</h3>
        <h3>一首凉凉</h3>
        <p>{{ scope.msg }}</p>
      </template>
      <template #content="{ msg, user }">
        <div>
          <p>我</p>
          <p>就是</p>
          <p>我</p>
          <h4>{{ msg }}</h4>
          <h4>{{ user.name }}</h4>
        </div>
      </template>
      <template #writter>
        <h3>李白</h3>
      </template>
    </Article>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right";
import Article from "@/components/article.vue";
export default {
  data() {
    return {
      color: "lightblue",
    };
  },
  // directives: {
  //   // color: {
  //   //   bind(el, binding) {
  //   //     console.log("触发了v-color指令的bind函数");
  //   //     el.style.color = binding.value;
  //   //     console.log(binding);
  //   //   },
  //   //   update(el, binding) {
  //   //     console.log("触发了v-color指令的update函数");
  //   //     el.style.color = binding.value;
  //   //   },
  //   // },
  //   color(el, binding) {
  //     el.style.color = binding.value;
  //   },
  // },
  components: {
    Left,
    Right,
    Article,
  },
};
</script>

<style lang="less">
.son {
  display: flex;
}
</style>
