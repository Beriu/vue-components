<template>
    <main>
        {{ selectedItem }}
        <autocomplete
            v-model="selectedItem"
            :items="items"
            selection-label="firstname"
            return-object
            type="text"
            label="Fruits"
            placeholder="Cherry..."/>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Autocomplete from "@/components/Autocomplete.vue";
import users from '@/mocks/users.json';

export default Vue.extend({
    name: 'App',

    components: {Autocomplete},

    mounted() {
        const setItems = () => this.items = users;
        setTimeout(setItems, 2000);
    },

    data() {
        return {
            selectedItem: null,
            items: []
        }
    }
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
