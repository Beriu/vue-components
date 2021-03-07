<template>
   <ul>
       <li v-for="(value, key) of items"
           :key="key"
           @click="$emit('item-selection', [value, key])">
           <span>{{ value }}</span>
       </li>
   </ul>
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

<style scoped lang="scss">
ul {
    padding: 0;
    margin:  0;
    list-style: none;
    text-align: left;

    li {
        padding: 0.25rem;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
        transition: background-color 100ms ease-in;

        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
}
</style>