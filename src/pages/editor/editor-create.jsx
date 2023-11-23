import { useState } from 'react';
import { AuthService } from '../../services/auth.service';
import { EditorService } from '../../services/editor.service';

export const EditorCreate = () => {
	const role = 755;
	const status = 1;
	const { utilisateur: organisation } = AuthService().isConnected();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [editorName, setEditorName] = useState();
	const [editorFirstname, setEditorFirstname] = useState();

	const registerEditor = async () => {
		setIsSubmiting(true);
		const data = {
			role,
			status,
			name_editor: editorName,
			firstname_editor: editorFirstname,
			email,
			password,
		};
		const response = await EditorService().createEditor(organisation.id, data);
		setTimeout(() => {
			setIsSubmiting(false);
			window.location.href = '/editor/list';
		});
	};
	return (
		<div className='d-flex justify-content-center'>
			<div className='col-md-6 grid-margin stretch-card'>
				<div className='card'>
					<div className='card-body'>
						<h4 className='card-title'>Création d'Editeur</h4>
						<div className='forms-sample'>
							<div className='form-group'>
								<label htmlFor='exampleInputUsername1'>Nom</label>
								<input
									type='text'
									className='form-control'
									id='exampleInputUsername1'
									placeholder='Nom'
									onChange={(e) => setEditorName(e.target.value)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='exampleInputUsername2'>Prénom(s)</label>
								<input
									type='text'
									className='form-control'
									id='exampleInputUsername2'
									placeholder='Prénom(s)'
									onChange={(e) => setEditorFirstname(e.target.value)}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type='email'
									className='form-control'
									id='exampleInputEmail1'
									placeholder='Email'
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input
									onChange={(e) => setPassword(e.target.value)}
									type='password'
									className='form-control'
									id='exampleInputPassword1'
									placeholder='Mot de passe'
								/>
							</div>

							<button
								className='btn btn-success me-2'
								type='button'
								onClick={(e) => registerEditor(e)}
								disabled={isSubmiting}>
								Enregistrer
								{isSubmiting && (
									<span
										className='spinner-border spinner-border-sm ml-2'
										role='status'
										aria-hidden='true'></span>
								)}
							</button>

							<button className='btn btn-light'>Annuler</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
