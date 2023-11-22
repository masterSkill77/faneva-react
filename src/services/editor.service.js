import { createHttp } from '../http';

export const EditorService = () => {
	const http = createHttp();
	const listEditorByOrganisation = async (organisationId) => {
		return await http.get(`/organisation/${organisationId}/editor/liste`);
	};
	const createEditor = async () => {};
	return { listEditorByOrganisation };
};
