import request from './client'

export default abstract class Request {
	client: typeof request

	constructor() {
		this.client = request
	}

	abstract request(...args: any): Promise<any>
}
