import { createHttp } from '../http';

export const OrganisationService = () => {
	const http = createHttp();
	const getListOrganisations = async (type) => {
		if (type !== 'processed') return await http.get('/list');
		return await http.get('/listAccepte');
	};

	const validateOrganisation = async (organisationId) => {
		return await http.put('/validerUnCompte/' + organisationId);
	};
	return { getListOrganisations, validateOrganisation };
};
