export interface Item {
    contentSnippet: string
    image: Image
    isoDate: string
    link: string
    title: string
}

export interface Image {
    small: string
    large: string
}

export interface NewsItems {
    category: string
    data: Item[]
}