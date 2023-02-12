import axios from 'axios'
import { defineStore } from 'pinia'
import { store } from './types'

axios.defaults.baseURL = "https://rickandmortyapi.com/api"

export const useStore = defineStore('character', {
    state: ():store => ({

    }),
    actions: {

    }
})