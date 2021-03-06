<template>
    <div>
        <label v-if="label" :for="id">{{ label }}</label>
        <input @input="filterItems(items)" :id="id" :placeholder="placeholder" type="text"/>
        <template v-if="items" slot="default">
            <list :items="items"/>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import sha1 from 'sha1';
import debounceFunction from 'debounce-promise';
import List from '@/components/List';
import debounce from "debounce-promise";

export default Vue.extend({
    name: "autocomplete",

    components: {List},

    props: {
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: () => []
        },
    },

    data() {
        return {
            id: sha1(new Date().toISOString()),
        }
    },

    methods: {
        filterItems: debounceFunction(function (event) {
            console.log(event);
        }, 500),
    }
})
</script>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.25);

    label {
        font-style: italic;
    }

    input {
        border: none;
        padding: 0.25rem;

        &:focus {
            outline: none;
        }
    }
}
</style>