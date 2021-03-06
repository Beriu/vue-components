<template>
   <div>
       <ul v-for="(value, key) of items" :key="key">
           <li>{{ value }}</li>
       </ul>
   </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "List",

    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
})
</script>

<style scoped>

</style>