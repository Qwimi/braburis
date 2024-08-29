import { defineStore, acceptHMRUpdate } from "pinia"
import type { Photoset } from "./types"

export const useAppStore = defineStore('cars', () => {
    const carsPhotosets = ref<Photoset[]>([])


    const getPhotosets = async () => {
        try {
            const response = await fetch(checkEnvironment().concat('/photosets.json'))
            const data = await response.json()
            carsPhotosets.value = data.photosets
        } catch (error) {
            console.error(error)
        }
    }

    const checkEnvironment = () => {
        let base_url =
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000"
                : "https://qwimi.github.io/braburis/";

        return base_url;
    };

    getPhotosets()

    return { carsPhotosets }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}