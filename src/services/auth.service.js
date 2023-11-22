import { createHttp } from '../http';
const TOKEN_NAME = 'user';
export const AuthService = () => {
	const http = createHttp();
	/**
	 *
	 * Log in the  user
	 * @param {string} email
	 * @param {string} password
	 * @returns Promise
	 */
	const login = async (email, password) => {
		return await http.post('/login', {
			email,
			password,
		});
	};
	/**
	 *
	 * @param {*} payload
	 * Store user  into localStorage
	 */
	const storeUser = (payload) => {
		const { utilisateur, user, token } = payload;
		localStorage.setItem(
			TOKEN_NAME,
			JSON.stringify({ user, token, utilisateur })
		);
	};
	const isConnected = () => JSON.parse(localStorage.getItem(TOKEN_NAME));

	const logout = async () => {
		return new Promise((resolve, reject) => {
			try {
				localStorage.removeItem(TOKEN_NAME);
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	};

	return { login, storeUser, isConnected, logout };
};
