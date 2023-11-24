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

	const acceptCandidature = async (candidatureId) => {
		return await http.put(`/candidatures/${candidatureId}/accepter`);
	};
	const rejectCandidature = async (candidatureId) => {
		return await http.delete(`/candidatures/${candidatureId}/rejeter`);
	};

	const getOfferById = async (offerId) => {
		return await http.get('/offer/' + offerId);
	};
	return {
		getAllOffers,
		getOffersByEditor,
		getOfferById,
		postOffer,
		acceptCandidature,
		rejectCandidature,
	};
};
