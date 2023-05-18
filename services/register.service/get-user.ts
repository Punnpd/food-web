import Request from "../request";

interface GetUserResponse {
    id: number
    line_id: string
    name: string
    status: string
    birth_date: Date
    gender: string
    weight: number
    height: number
    picture_url: string
    create_at: Date
}

export default class GetUserService extends Request {
    async request(line_id: string) {
        const { data } = await this.client.get<GetUserResponse>('/users/line_id/' + line_id,
            {
                headers: {
                    'accept': 'application/json',
                }
            }
        )

        return data
    }
}