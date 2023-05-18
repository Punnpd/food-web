export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface ApiEndpoint<RequestBody, ResponseBody> {
  requestBody: RequestBody
  responseBody: ResponseBody
}

export type GetEndpoint<ResponseBody> = ApiEndpoint<void, ResponseBody>
