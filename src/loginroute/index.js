import { createBrowserRouter } from 'react-router-dom';
import { Organisation } from './../pages/organisation';
import { EditorList } from './../pages/editor/editor-list';
import { EditorCreate } from '../pages/editor/editor-create';
import Inscription from '../pages/Inscription';
import { Login } from '../pages/login';
const loginroute = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	

	{
		path: '/inscription',
		element: <Inscription />,
	},
]);
export default loginroute;
