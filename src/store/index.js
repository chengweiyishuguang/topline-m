import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
// 创建一个Vuex 容器实例，用来在组件的外部管理共享的数据状态
//注意new Vuex.Store //S是大写
  export default  new Vuex.Store({
    //state类似于组件中的data
     //关于state
    //容器中的state类似于data用来储存共享数据
        //容器中的数据是共享的，任何组件都可以访问
        //容器中的数据也是响应式的，数据改变也会驱动试图更新
    //在组件中访问容器中的数据，可以通过以下几种方式
    //在组件模板中直接通过$store.state.xxx访问容器数据
    //修改：使用mutation
    state:{
        count:10
    },
    //作用：类似于methods，主要用来修改state
    //注意：mutation 函数中没有this 
    //mutation函数的第一个参数是state
    //如何在组件中调用mutation函数？
    //this.$store.commit('mutation',可选参数)//语法
    //修改容器的state务必使用mutation函数，因为mutation函数中修改state数据才会和调试工具正常工作

    mutations:{
        add(state,data){
            // state.count+=data
            state.count++
            window.console.log(data)

        },
        asyncAdd(state){
            setTimeout(()=>{
                state.count++
            },1000)
        },
        subtract(state){
            state.count--
        }
    },
    //action的作用类似于mutation
    //作用：执行异步操作，提交mutation修改state
    //注意
    //这里也没有this
    //第一个参数默认接收store实例
    //如何在组件中调用action函数？
    //this.$store.dispatch('action函数名'，可选参数)
    actions:{
        asyncSubtract(stroe){
            setTimeout(()=>{
                stroe.commit('subtract')
            },1000)
        }
    }
    
   
});
