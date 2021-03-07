<template>
    <div>
        <label v-if="label" :for="id">{{ label }}</label>

        <input
            @focusin="isFocused = true"
            @focusout="isFocused = false"
            :id="id"
            :type="type"
            v-model="inputValue"
            @input="filterItems()"
            :placeholder="placeholder"/>

        <transition name="fade" mode="out-in">
            <list
                @item-selection="setSelectionValue($event)"
                v-show="isFocused"
                class="autocomplete-list"
                :items="menuItems"/>
        </transition>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import sha1 from 'sha1';
import debounceFunction from 'debounce-promise';
import inputType from "@/validators/inputType";
import filterStringArray from "@/validators/filterStringArray";

import List from '@/components/List';

interface ComponentData {
    inputValue: string | null,
    filteredItems: any[],
    isFocused: boolean
}

export default Vue.extend({
    name: "autocomplete",

    components: {List},

    model: {
        prop: 'selectedItem',
        event: 'autocomplete-selection'
    },

    props: {
        id: {
            type: String,
            default: sha1(new Date().toISOString())
        },
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
        type: {
            type: String,
            default: 'text',
            validator: inputType
        },
        loading: {
            type: Boolean,
            default: false
        },
        selectedItem: {
            required: true,
        },
        returnObject: {
            type: Boolean
        },
        selectionLabel: {
            type: String
        }
    },

    data() {
        return {
            inputValue: null,
            filteredItems: [],
            isFocused: false
        } as ComponentData;
    },

    methods: {
        filterItems: debounceFunction(function () {
            this.filteredItems = this.inputValue
                ? this.selectionLabel
                    ? this.items.filter(filterStringArray(this.inputValue, this.selectionLabel))
                    : this.items.filter(filterStringArray(this.inputValue))
                : this.items;
        }, 250),
        setSelectionValue([itemValue, itemKey]: [string, number]) {
            //@ts-ignore
            this.inputValue = itemValue;

            const returnValue = this.returnObject
                ? this.items[itemKey]
                : itemValue;

            this.$emit('autocomplete-selection', returnValue);
        }
    },

    computed: {
        menuItems: function () {
            const displayItems = this.inputValue ? this.filteredItems : this.items;
            return this.selectionLabel
                ? displayItems.map(d => d[this.selectionLabel])
                : displayItems;
        }
    }
})
</script>

<style scoped lang="scss">
div {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
    background-color: rgba(0, 0, 0, 0.25);

    label {
        font-style: italic;
    }

    .autocomplete-list {
        padding:  0 1rem 1rem 1rem;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
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