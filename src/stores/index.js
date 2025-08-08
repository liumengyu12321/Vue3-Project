import { defineStore } from "pinia";
import { ref } from "vue";

export const useAllDataStore = defineStore('allData', () => {

    const store = ref(
        {
            isCollapse : false,
            menuList:[],
            token:''
        }
    )
    return store.value
})