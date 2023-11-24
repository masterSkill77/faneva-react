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
	const getOfferById = async (offerId) => {
		return await http.get('/offer/' + offerId);
	};
	return { getAllOffers, getOffersByEditor, getOfferById, postOffer };
};
