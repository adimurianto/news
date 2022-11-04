export const updateNews = (category: string, items: any) => {
    return {
        type: "updateNews",
        category,
        items
    }
}

export const updateCategory = (category: string) => {
    return {
        type: "updateCategory",
        category
    }
}