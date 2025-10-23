import { ADVICE_DATA, CATEGORIES, SERIOUSNESS_LEVELS } from "../data/adviceData";
import { useState, useCallback } from "react";

export const useAdviceGenerator = () => {
    const [currentAdvice, setCurrentAdvice] = useState('');
    const [selectedCategory, setSelectedCategory] =
        useState(CATEGORIES.WORK);
    const [seriousnessLevel, setSeriousnessLevel] =
        useState(SERIOUSNESS_LEVELS.MILD);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateAdvice = useCallback(async () => {
        setIsGenerating(true);

        const categoryAdvice = ADVICE_DATA[selectedCategory];

        const levelAdvice = categoryAdvice[seriousnessLevel];

        if (levelAdvice && levelAdvice.length > 0) {
            const randomIndex = Math.floor
                (Math.random() * levelAdvice.length);
            setCurrentAdvice(levelAdvice[randomIndex]);
        }

        setIsGenerating(false);
    }, [selectedCategory, seriousnessLevel]);

    const resetAdvice = useCallback(()=>{
        setCurrentAdvice('');
    }, []);

    return {
        currentAdvice, selectedCategory, seriousnessLevel,
        isGenerating, setSelectedCategory,
        setSeriousnessLevel, generateAdvice, resetAdvice
    }
}