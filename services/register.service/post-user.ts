import Request from "../request";

interface PostUserResponse {
    line_id: string
    name: string
    status: string
    birth_date: Date
    gender: string
    weight: number
    height: number
    picture_url: string
}

export default class PostUserService extends Request {
    async request(requestData: any) {
        try {
            const { data } = await this.client.post<PostUserResponse>('/users/',
                requestData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                    }
                }
            )

            return data
        } catch (error: any) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    }
}