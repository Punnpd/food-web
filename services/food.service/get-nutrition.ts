import Request from "../request";

interface GetNutritionResponse {
    total_protein: number
    total_carbohydrate: number
    total_fat: number
    total_calorie: number
}

export default class GetNutritionService extends Request {
    async request(line_id: string) {
        const { data } = await this.client.get<GetNutritionResponse>('/bot/nutrition_summary/' + line_id,
            {
                headers: {
                    'accept': 'application/json',
                }
            }
        )

        return data
    }
}