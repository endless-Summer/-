
<template>
  <div class="divALL">
    <p>数值是: {{msg}} </p>
    <h1>{{demo.welcome}}</h1>
  <br><br><br> 
    <h1 :class="titleClass">Make me green</h1> <!-- 此处添加一个动态 class 绑定 -->
  <br><br><br> 
    <em> count的值：{{count}}</em> 
    <button @click="countAdd">+1</button>
    <br><br><br>
    <!-- 表单绑定：使用1 v-model和2 v-on + v-bind -->
    <input v-model="content" placeholder="type here (v-model)">
    <p> {{content}}</p>
    <br> 
    <input type="text" :value="text" @input="Input" placeholder="type (v-on和v-bind)">
    <p>{{text}}</p>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue'

// ref可以接受任何类型的值， reactive只接受对象类型。
let aaa = 666
const msg = ref(aaa)
const demo = reactive({ welcome: 'hello,vue? 3q' })

//v-bind指令使用是属性绑定
const titleClass = ref('title')

//v-on指令使用是事件绑定
const count=ref(0)
function countAdd(){
  count.value++
}

const content=ref('')
const text=ref('')
 function Input(e){
  text.value=e.target.value
 }

</script>
<style scoped>
.divALL {
  display: flex;
  flex-direction: column;
}
.title {
  color: aquamarine;
}
</style>