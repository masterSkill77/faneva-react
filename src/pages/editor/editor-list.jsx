import { useEffect, useState } from 'react';
import { AuthService } from '../../services/auth.service';
import { EditorService } from '../../services/editor.service';

export const EditorList = () => {
	const [editors, setEditors] = useState();
	const { utilisateur: organisation } = AuthService().isConnected();
	useEffect(() => {
		EditorService()
			.listEditorByOrganisation(organisation.id)
			.then((res) => {
				console.log(res.data.editors);
				setEditors(res.data.editors);
			});
	}, []);
	return (
		editors && (
			<div className='row'>
				{editors.map((item, index) => {
					return (
						<div
							key={item + '_' + index}
							className='col-md-4 grid-margin stretch-card'>
							<div className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										{item.firstname_editor} {item.name_editor}
									</h4>
									<p className='card-description'>Editeur N : {item.id}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		)
	);
};
