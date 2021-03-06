<template>
    <main>
        <autocomplete
            label="Cities autocomplete"
            :items="['apples', 'ridichii', 'da', 'mi-e lene']"/>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Autocomplete from "@/components/Autocomplete.vue";

export default Vue.extend({
    name: 'App',
    components: {Autocomplete},
});
</script>

<style lang="scss">
    main {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
