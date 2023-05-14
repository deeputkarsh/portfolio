/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import {GraphQLClient, gql} from 'graphql-request';
import CMS_API_LIST from './cms-api-list';

class Cms {
	data: any;
	baseUrl: string;
	apiList: typeof CMS_API_LIST;
	requestHeaders: Record<string, string>;
	gqClient: GraphQLClient;

	constructor(cmsBaseUrl: string) {
		this.baseUrl = `${cmsBaseUrl}/api`;
		this.data = {};
		this.apiList = CMS_API_LIST;
		this.requestHeaders = {authorization: `Bearer ${process.env.CMS_AUTH_TOKEN ?? ''}`};
		this.gqClient = new GraphQLClient(`${cmsBaseUrl}/graphql`, {headers: this.requestHeaders});
	}

	async get(apiUrl: string, noCache = false /* , option?: any */) {
		if (this.data[apiUrl] && !noCache) {
			return this.data[apiUrl];
		}

		this.data[apiUrl] = await axios

			.get(`${this.baseUrl}/${apiUrl}`, {timeout: 30000, headers: this.requestHeaders})
			.then(response => {
				if (response.status === 200) {
					return response.data;
				}

				return null;
			});
		return this.data[apiUrl];
	}

	async put(apiUrl: string, body: any) {
		return axios.put(`${this.baseUrl}/${apiUrl}`, body, {headers: this.requestHeaders}).then(({data}) => data);
	}

	async graphql(query: string, noCache = false) {
		if (this.data[query] && !noCache) {
			return this.data[query];
		}

		this.data[query] = await this.gqClient.request(
			gql`
				${query}
			`,
		);
		return this.data[query];
	}
}
const cmsClient = new Cms(process.env.CMS_ENDPOINT ?? '');
export {cmsClient};
export default cmsClient;
