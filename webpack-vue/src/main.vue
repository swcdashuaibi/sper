
<template>
    <div>
        <h1>这是 App 组件</h1>

    </div>
</template>

<script>
    // 第一种方式

    // var index= {
    //     main:'123'
    // };
    // export default  index

    // 一个模块中export只允许向外暴露一次
    // 第二种方式
    export default {
        // data必须是个方法和vue子组件样式差不多
        data(){
            return{
                msg:"123"
            }
        },
        methods:{
            show(){
                console.log("success!")
            }
        }
    }
    // 可暴露多次
    export var title = 'success2'
</script>


<style>

</style>
