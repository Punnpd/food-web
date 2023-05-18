import Request from "../request";

interface GetFoodsResponse {
    id: number
    name: string
    calorie: number
    protein: number
    fat: number
    carbohydrate: number
    create_at: Date
}

export default class GetFoodsService extends Request {
    async request() {
        const { data } = await this.client.get<{[key: string]: GetFoodsResponse}>('/menus/',
            {
                headers: {
                    'accept': 'application/json',
                }
            }
        )

        return data
    }
}