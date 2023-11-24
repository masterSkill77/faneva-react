import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OfferService } from '../../services/offer.service';
import { CandidaturesDetails } from '../../components/generals/candidatures/details';

export const OfferDetails = () => {
	const { offerId } = useParams();
	const [offer, setOffer] = useState();

	const validateCandidature = async (candidatureId) => {
		await OfferService()
			.acceptCandidature(candidatureId)
			.then((data) => window.location.reload())
			.catch((e) => alert(e.response.data.message));
	};
	const rejectCandidature = async (candidatureId) => {
		await OfferService()
			.rejectCandidature(candidatureId)
			.then((data) => window.location.reload())
			.catch((e) => alert(e.response.data.message));
	};
	useEffect(() => {
		OfferService()
			.getOfferById(offerId)
			.then(({ data }) => {
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
									<CandidaturesDetails
										key={candidature + '_' + index}
										candidature={candidature}
										rejectCandidature={rejectCandidature}
										validateCandidature={validateCandidature}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</>
		)
	);
};
