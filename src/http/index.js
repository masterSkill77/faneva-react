import axios from 'axios';

const TOKEN_NAME = 'job-faneva';
const { token } = localStorage.getItem(TOKEN_NAME)
	? JSON.parse(localStorage.getItem(TOKEN_NAME))
	: { token: null };

export const createHttp = () => {
	const instance = axios.create({
		// baseURL: process.env.REACT_APP_BASE_API_URL,
		baseURL: 'http://127.0.0.1:8000/api',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return instance;
};
