<template lang="html">
    <div class="info">
        <h2>{{info}}</h2>
        <h3>Project Name: vuex-webpack4</h3>
        <h3>Project Version: 0.0.1</h3>
        <h3>Author: twotwo &lt;twotwo.li@gmail.com></h3>
        <h3>Desc: 使用webpack4模板的vuex练习</h3>
    </div>
</template>

<script>
import test from '@src/lib/test';

export default {
    name: 'info',
    data () {
        return {
            info: 'project info:'
        };
    },

    mounted () {
        test();
    }
};
</script>

<style>
h2 {
  margin: 10px;
  font-size: 20px;
}
</style>
