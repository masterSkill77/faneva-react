import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OfferService } from '../../services/offer.service';

export const OfferDetails = () => {
	const { offerId } = useParams();
	const [offer, setOffer] = useState();
	const STATUT = { en_attente: 'En attente', validée: 'Validée' };
	useEffect(() => {
		OfferService()
			.getOfferById(offerId)
			.then(({ data }) => {
				console.log(data);
				setOffer(data);
			});
	}, []);
	return (
		offer && (
			<>
				<div className='d-flex' style={{ gap: '10px' }}>
					<div className='col-md-4'>
						<img alt='bg img' src={offer.image} style={{ width: '100%' }} />
					</div>
					<div className='col-md-8 border p-4'>
						<ul>
							<li>Titre : {offer.titre_offre}</li>
							<li>Description de l'offre : {offer.desc_offre}</li>
							<li>Type : {offer.type_offre}</li>
							<li>Contrat : {offer.type_contrat}</li>
						</ul>
					</div>
				</div>
				<div className='p-2'>
					<h3 className='text-muted'>Liste des candidatures</h3>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th>#</th>
									<th>Nom du candidat</th>
									<th>CV</th>
									<th>LM</th>
									<th>Statut</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{offer.candidatures.map((candidature, index) => (
									<tr key={candidature + '_' + index}>
										<td>{candidature.id}</td>
										<td>
											{candidature.candidate.firstname_candidate}{' '}
											{candidature.candidate.name_candidate}
										</td>
										<td>
											<a
												rel='noreferrer'
												href={`http://127.0.0.1:8000/storage/${candidature.cv.replace(
													'public/',
													''
												)}`}
												target='_blank'>
												Curriculum vitae
											</a>
										</td>
										<td>
											<a
												rel='noreferrer'
												href={`http://127.0.0.1:8000/storage/${candidature.lm.replace(
													'public/',
													''
												)}`}
												target='_blank'>
												Lettre de motivation
											</a>
										</td>
										<td>{STATUT[candidature.etat_candidature]}</td>
										<td>
											{candidature.etat_candidature === 'en_attente' && (
												<>
													<button
														className='btn btn-sm btn-success'
														style={{ marginRight: '5px' }}>
														ACCEPTER
													</button>
													<button className='btn btn-sm btn-danger'>
														REJETER
													</button>
												</>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</>
		)
	);
};
