import { defineStore } from "pinia";
import { ref } from "vue";

export const useAllDataStore = defineStore('allData', () => {

    const store = ref(
        {
            isCollapse : true
        }
    )
    return store.value
})