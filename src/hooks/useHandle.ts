import api from '../services/api';
import { useState } from "react";


export default function useHandle() {
    const { pokeFilter } = api();
    const [filter, setFilter] = useState<string>('');
    const [gameDescription, setGameDescription] = useState(0);
    const handleSubmitSearch = () => {
        pokeFilter(filter);
    }
    const handleInputChange = (value: string) => {
        setFilter(value);
    }
    const handleGameDescriptionChange = (value: string) => {
        setGameDescription(Number(value));
    }
    return {
        filter,
        handleSubmitSearch,
        handleInputChange,
        gameDescription,
        handleGameDescriptionChange,
    }
}