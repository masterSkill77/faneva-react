import { useState } from 'react';

export const CandidaturesDetails = ({
	candidature,
	validateCandidature,
	rejectCandidature,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingReject, setIsLoadingReject] = useState(false);
	const validate = async (candidatureId) => {
		setIsLoading(true);
		await validateCandidature(candidatureId);
		setIsLoading(false);
	};

	const reject = async (candidatureId) => {
		setIsLoadingReject(true);
		await rejectCandidature(candidatureId);
		setIsLoadingReject(false);
	};
	const STATUT = { en_attente: 'En attente', validée: 'Validée' };
	return (
		<tr>
			<td>{candidature.id}</td>
			<td>
				{candidature.candidate?.firstname_candidate}{' '}
				{candidature.candidate?.name_candidate}
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
							style={{ marginRight: '5px' }}
							onClick={() => validate(candidature.id)}>
							{isLoading && (
								<span
									class='spinner-border spinner-border-sm'
									role='status'
									aria-hidden='true'></span>
							)}
							ACCEPTER
						</button>
						<button
							className='btn btn-sm btn-danger'
							onClick={() => reject(candidature.id)}>
							{isLoadingReject && (
								<span
									class='spinner-border spinner-border-sm'
									role='status'
									aria-hidden='true'></span>
							)}
							REJETER
						</button>
					</>
				)}
			</td>
		</tr>
	);
};
