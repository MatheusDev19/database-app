import { api } from "../Services/api";
import type { User } from "../Types/User";

export const UserService = {

    async getAll(): Promise<User> {
        const response = await api.get<User>('/users')
        return response.data
    },

    async register(user: User): Promise<User> {
        const response = await api.post<User>('/users', user)
        return response.data
    },

    async update(user: User, id: string): Promise<User> {
        const response = await api.put(`/users/${id}`, user)
        return response.data
    },

    async delete(id: string) {
        const response = await api.delete(`/users/${id}`)
        return response.status
    }
}
