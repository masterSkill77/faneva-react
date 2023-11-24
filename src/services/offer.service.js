import { createHttp } from '../http';

export const OfferService = () => {
	const http = createHttp();
	const getAllOffers = async () => {
		return http.get('/offre/listAccepte');
	};
	const getOffersByEditor = (editorId) => {};
	const postOffer = async (editorId, data) => {
		return await http.post(`/editor/${editorId}/offre`, data);
	};
	return { getAllOffers, getOffersByEditor, postOffer };
};
