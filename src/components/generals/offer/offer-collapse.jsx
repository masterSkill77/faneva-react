export const OfferCollapse = ({ offer }) => {
	return (
		<tr>
			<td>{offer.id}</td>
			<td>{offer.titre_offre}</td>
			<td>{offer.type_offre.toUpperCase()}</td>
			<td>{offer.type_contrat}</td>
			<td>{offer.candidatures.length}</td>
			<td>
				<button className='btn btn-primary btn-sm'>VOIR</button>
			</td>
		</tr>
	);
};
