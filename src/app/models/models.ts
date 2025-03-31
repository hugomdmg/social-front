export interface Point {
    x: number
    y: number
    vx: number
    vy: number
    color: string
    size: number
}

export interface User {
    id?: number
    name?: string
    email: string
    password: string
}

export interface Chat {
    id?: number
    user1_id: string
    user2_id: string
    user1_name: string
    user2_name: string
}