<template>
  <div class="com">
      <h2>Bar 组件</h2>
      <p>{{$store.state.count}} </p>
      <button >-</button>
      <p>使用action进行异步操作</p>
      <button @click="$store.dispatch('asyncSubtract')">-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>