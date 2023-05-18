import Request from "../request";

interface GetTopFoodResponse {
    menu_name: string
    menu_calorie: number
    order_count: number
}

export default class GetTopFoodService extends Request {
    async request(line_id: string) {
        const { data } = await this.client.get<GetTopFoodResponse[]>('/bot/top_menus_by_user/' + line_id,
            {
                headers: {
                    'accept': 'application/json',
                }
            }
        )

        return data
    }
}