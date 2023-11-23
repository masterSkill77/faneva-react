import { useState } from 'react';
import { AuthService } from '../../services/auth.service';
import { OfferService } from '../../services/offer.service';

export const OfferCreate = () => {
	const user = AuthService().isConnected();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [titre_offre, setTitre_offre] = useState();
	const [ref, setRef] = useState();
	const [type_contrat, setIType_contrat] = useState();
	const [type_offre, setType_offre] = useState();
	const [desc_offre, setDesc_offre] = useState();
	const [mission, setMission] = useState();
	const [profil_rech, setProfil_rech] = useState();
	const [date_lim, setDate_lim] = useState();
	const [info_sup, setInfo_sup] = useState();
	const [image, setImage] = useState();

	const createoffer = async () => {
		setIsSubmitting(true);
		const data = {
			titre_offre,
			ref,
			type_offre,
			type_contrat,
			desc_offre,
			mission,
			profil_rech,
			date_lim,
			info_sup,
			image,
		};
		const body = new FormData();
		Object.keys(data).forEach((key) => body.append(key, data[key]));

		await OfferService().postOffer(user.utilisateur.id, body);
		setTimeout(() => {
			setIsSubmitting(false);
			window.location.href = '/offer/list';
		}, 1000);
	};
	return (
		<div>
			<div className='form-row row'>
				<div className='form-group col-md-6'>
					<label htmlFor='inputEmail4'>Titre offre</label>
					<input
						type='text'
						className='form-control'
						id='inputEmail4'
						onChange={(e) => setTitre_offre(e.target.value)}
					/>
				</div>
				<div className='form-group col-md-6'>
					<label htmlFor='inputPassword4'>Reference</label>
					<input
						type='text'
						className='form-control'
						id='inputPassword4'
						onChange={(e) => setRef(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-row row'>
				<div className='form-group col-md-6'>
					<label htmlFor='inputAddress'>Profil recherché</label>
					<input
						type='text'
						className='form-control'
						id='inputAddress'
						onChange={(e) => setProfil_rech(e.target.value)}
					/>
				</div>
				<div className='form-group col-md-3'>
					<label htmlFor='inputCity'>Type de contrat</label>
					<select
						className='form-control'
						id='inputCity'
						onChange={(e) => setIType_contrat(e.target.value)}>
						<option value='CDI'>CDI</option>
						<option value='CDD'>CDD</option>
					</select>
				</div>
				<div className='form-group col-md-3'>
					<label htmlFor='inputState'>Type d'offre</label>
					<select
						id='inputState'
						className='form-control'
						onChange={(e) => setType_offre(e.target.value)}>
						<option value='emploi'>Emploi</option>
						<option value='stage'>STAGE</option>
					</select>
				</div>
			</div>
			<div className='row'>
				<div className='form-group col-md-12 col-lg-6'>
					<label htmlFor='mission'>Mission</label>
					<textarea
						className='form-control'
						id='mission'
						rows='5'
						onChange={(e) => setMission(e.target.value)}
						style={{ minHeight: '6rem !important', height: '6rem' }}></textarea>
				</div>
				<div className='form-group col-md-12 col-lg-6'>
					<label htmlFor='desc_offre'>Description de l'offre</label>
					<textarea
						className='form-control'
						id='desc_offre'
						rows='5'
						onChange={(e) => setDesc_offre(e.target.value)}
						style={{ minHeight: '6rem !important', height: '6rem' }}></textarea>
				</div>
				<div className='form-group col-md-12 col-lg-6'>
					<label htmlFor='desc_offre'>Information supplementaire</label>
					<textarea
						className='form-control'
						id='desc_offre'
						rows='5'
						onChange={(e) => setInfo_sup(e.target.value)}
						style={{ minHeight: '6rem !important', height: '6rem' }}></textarea>
				</div>
				<div className='form-group col-lg-6 col-md-12'>
					<label htmlFor='candidature_limite'>Date limite de candidature</label>
					<input
						type='date'
						className='form-control'
						id='candidature_limite'
						onChange={(e) => setDate_lim(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-row row'>
				<div className='form-group'>
					<label htmlFor='exampleFormControlFile1'>Image mise en avant</label>
					<input
						type='file'
						className='form-control-file'
						onChange={(e) => setImage(e.target.files[0])}
						id='exampleFormControlFile1'
					/>
				</div>
			</div>

			<button
				type='submit'
				className='btn btn-primary'
				disabled={isSubmitting}
				onClick={() => createoffer()}>
				Publier offre{' '}
				{isSubmitting && (
					<span
						className='spinner-border spinner-border-sm'
						role='status'
						aria-hidden='true'></span>
				)}
			</button>
		</div>
	);
};
