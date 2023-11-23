import { createBrowserRouter } from 'react-router-dom';
import { Organisation } from './../pages/organisation';
import { EditorList } from './../pages/editor/editor-list';
import { EditorCreate } from '../pages/editor/editor-create';
import Inscription from '../pages/Inscription';
const router = createBrowserRouter([
	{
		path: '/',
		element: <>Hello</>,
	},
	{
		path: '/organisation/:type',
		element: <Organisation />,
	},
	{
		path: '/editors/list',
		element: <EditorList />,
	},
	{
		path: '/editors/create',
		element: <EditorCreate />,
	},

	{
		path: '/inscription',
		element: <Inscription />,
	},
]);
export default router;
