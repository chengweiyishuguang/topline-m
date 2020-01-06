<template>
  <div class="com">
      <!-- 在组件模板中直接通过$store访问容器 -->
    <!-- <p>{{$store.state.count}}</p> -->
    
      <h2>Foo 组件</h2>
     <p>{{$store.state.count }}</p>
      <button @click="$store.commit('add')">+</button>
       <p>mutation传参</p>
      <!-- <button @click="$store.commit('add',2)">+</button> -->
      <!--mutation函数第一个值永远是state固定单数，除此之外只能传递一个参数，如果多穿会是undefined  -->
      <!-- <button @click="$store.commit('add',2,3)">+</button> -->
      <!-- 如果想多个参数传参就用数组或者对象 -->
      <button @click="$store.commit('add',{num1:10,num2:20})">+</button>
      <!-- 异步操作控制台数据不会跟随更新，解决办法用action -->
        <p>不要在mutation函数中执行异步操作修改</p>
        <button @click="$store.commit('asyncAdd',)"> + </button>

  </div>
</template>

<script>
export default {
   data(){
       return {
           message:'foo message'
       }
   }

}
</script>

<style>

</style>