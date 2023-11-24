import { createBrowserRouter } from 'react-router-dom';
import { Organisation } from './../pages/organisation';
import { EditorList } from './../pages/editor/editor-list';
import { EditorCreate } from '../pages/editor/editor-create';
import { OfferList } from '../pages/offer/list';
import { OfferCreate } from '../pages/offer/create';
import homeImage from '../router/Welcome.png';
import Inscription from '../pages/Inscription';
const router = createBrowserRouter([
	 {
    path: '/',
    element: (
      <div>
       
        <img src={homeImage} alt="Home" width="800" height="300"/>
      </div>
    ),
  },
  // ... autres routes ...
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
		path: '/offer/list',
		element: <OfferList />,
	},
	{
		path: '/offer/create',
		element: <OfferCreate />,
    },
	{
		path: '/inscription',
		element: <Inscription />,
	},
]);
export default router;
