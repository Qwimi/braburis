import { defineStore, acceptHMRUpdate } from "pinia"
import type { Photoset } from "./types"

export const useAppStore = defineStore('cars', () => {
    const carsPhotosets = ref<Photoset[]>([])


    const getPhotosets = async () => {
        try {
            const response = await fetch('/photosets.json')
            const data = await response.json()
            carsPhotosets.value = data.photosets
        } catch (error) {
            console.error(error)
        }
    }

    getPhotosets()

    return { carsPhotosets }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}