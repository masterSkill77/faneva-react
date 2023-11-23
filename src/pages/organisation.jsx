import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OrganisationService } from '../services/organisation.service';

export const Organisation = () => {
	const { type } = useParams();
	const [organisations, setOrganisations] = useState();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		OrganisationService()
			.getListOrganisations(type)
			.then(({ data }) => {
				setOrganisations(data);
			});
	}, []);

	const acceptOrganisation = async (itemId) => {
		setIsLoading(true);
		await OrganisationService()
			.validateOrganisation(itemId)
			.then(() => window.location.reload())
			.finally(() => setIsLoading(false));
	};
	return (
		organisations && (
			<>
				<div className='col-lg-12 grid-margin stretch-card'>
					<div className='card'>
						<div className='card-body'>
							<h4 className='card-title'>Liste des organisations</h4>

							<div className='table-responsive'>
								<table className='table table-striped'>
									<thead>
										<tr>
											<th>Logo</th>
											<th>Type</th>
											<th>Nom Organisation</th>
						
											<th>Email</th>
											<th>Téléphone</th>
											<th>Site web</th>
											<th>Création</th>
											<th>NIF/STAT</th>
											<th>Statut légal</th>
											<th>Adresse</th>
											<th>Dossier</th>
											{type === 'in-process' && <th>Action</th>}
										</tr>
									</thead>
									<tbody>
										{organisations.map((item, index) => {
											return (
												<tr key={item}>
													<td
														style={{
															padding: '10px',
														}}>
														{item.role}{' '}
														<img
															style={{ width: 120, height: 80 }}
															src={item.logo_org}
															alt='This is a background'
															className='img-fluid'

														/>
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.type_org}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.nom_org}
													</td>
													
													<td
														style={{
															padding: '10px',
														}}>
														{item.email_org}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.telephone_org}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.siteweb_org}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.date_creation}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														NIF/STAT : {item.num_nif} /{item.num_stat}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.statut_legal_org}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{item.adresse}, {item.region} - {item.province}{' '}
														{item.code_postal}
													</td>
													<td
														style={{
															padding: '10px',
														}}>
														{' '}
														<img
															style={{ width: 120, height: 80 }}
															src={item.imgStat}
															alt='This is a background'
															className='img-fluid'

														/>{' '}
														<img
															style={{ width: 120, height: 80 }}
															src={item.imgNif}
															alt='This is a background'
															className='img-fluid'

														/>
													</td>
													{type === 'in-process' && (
														<td>
															<button
																className='btn btn-primary btn-sm'
																type='button'
																onClick={() => acceptOrganisation(item.id)}
																disabled={isLoading}>
																{isLoading && (
																	<span
																		className='spinner-border spinner-border-sm'
																		role='status'
																		aria-hidden='true'></span>
																)}
																ACCEPTER
															</button>
														</td>
													)}
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
};
