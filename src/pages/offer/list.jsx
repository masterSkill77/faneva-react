import { useEffect, useState } from 'react';
import { AuthService } from '../../services/auth.service';
import { OfferService } from '../../services/offer.service';
import { OfferCollapse } from '../../components/generals/offer/offer-collapse';

export const OfferList = () => {
	const { user, utilisateur } = AuthService().isConnected();
	const [offers, setOffers] = useState();
	useEffect(() => {
		OfferService()
			.getAllOffers()
			.then((response) => {
				if (user.role === 756)
					setOffers(
						response.data.filter(
							(offer) => offer.editor.organisation_id === user.id
						)
					);
				else if (user.role === 755) {
					setOffers(
						response.data.filter((offer) => offer.editor_id === utilisateur.id)
					);
				}
			});
	}, []);
	return (
		offers && (
			<>
				<h2 className='text-muted text-decoration-underline'>
					Toutes{' '}
					{user.role === 756 ? 'les offres de mon organisation' : 'mes offres'}
				</h2>
				<div>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th>#</th>
									<th>Titre de l'offre</th>
									<th>Type</th>
									<th>Contrat</th>
									<th>Réponse parvenue</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{offers.map((offer, index) => (
									<OfferCollapse key={offer + '_' + index} offer={offer} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</>
		)
	);
};
