import useApi from "../services/api"
import { useState } from "react"


export default function useHandles() {
    const {
        searchPokemon
    } = useApi()
    const [search, setSearch] = useState<string>('')
    const [gameDescription, setGameDescription] = useState(0)
    const handleSubmitSearch = () => {
        searchPokemon(search)
    }
    const handleInputChange = (value: string) => {
        setSearch(value)
    }
    const handleGameDescriptionChange = (value: string) => {
        setGameDescription(Number(value))
    }
    return {
        search,
        handleSubmitSearch,
        handleInputChange,
        gameDescription,
        handleGameDescriptionChange,
    }
}