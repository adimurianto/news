export const updateNews = (category: string, items: any) => {
    return {
        type: "updateNews",
        category,
        items
    }
}

export const updateCatgeory = (category: string) => {
    return {
        type: "updateCatgeory",
        category
    }
}