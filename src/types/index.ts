export interface SVGProps {
    className?: string
}
export interface Todo {
    id: number,
    text: string
    closed: boolean
    createdAt: Date
    updatedAt: Date
}