import Request from "../request";

interface GetPreferencesResponse {
    id: number
    name: string
    create_at: Date
}

export default class GetPreferencesService extends Request {
    async request() {
        const { data } = await this.client.get<GetPreferencesResponse[]>('/features/',
            {
                headers: {
                    'accept': 'application/json',
                }
            }
        )

        return data
    }
}