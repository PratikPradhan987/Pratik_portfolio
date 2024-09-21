'use client';
import { useState } from 'react';
import ContactCode from '@/components/ContactCode';

const ContactPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const submitForm = async (e: any) => {
		e.preventDefault();
		console.log(process.env.NEXT_PUBLIC_API_URL);
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
			method: 'POST',
			body: JSON.stringify({ name, email, subject, message })
		});
		if (res.ok) {
			alert('Your response has been received!');
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		} else {
			alert('There was an error. Please try again in a while.');
		}
	};

	return (
		<div className="flex flex-col justify-center gap-8 lg:p-10">
			<div className="flex-1">
				<h3 className="mb-6">Reach Out Via Socials</h3>
				<ContactCode />
			</div>
			<section className="md:max-w-6xl mx-auto my-20 px-4 space-y-4 bg-stone-600 p-8 rounded-xl">
				<div className="flex flex-col space-y-2 items-center justify-center rounded-lg text-white">
					<h3 className="lg:text-2xl text-xl">Or Fill Out This Form</h3>
					<form className='relative rounded-md flex flex-col gap-8 md:p-8 p-4 w-full' onSubmit={submitForm}>
						<div className="flex gap-4">
							<div>
								<label className="text-sm text-white " htmlFor="name">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									placeholder='Jhon Doe'
									className="w-full p-4 rounded-xl focus:border-primary bg-black placeholder:text-stone-500 "
								/>
							</div>
							<div>
								<label className="text-sm text-white " htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									placeholder='Jhone@gmail.com'
									className="w-full p-4 rounded-xl focus:border-primary bg-black placeholder:text-stone-500 "
								/>
							</div>
						</div>
						<div>
							<label className="text-sm text-white " htmlFor="name">Subject</label>
							<input
								type="text"
								name="subject"
								id="subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
								placeholder='For'
								className="w-full p-4 rounded-xl focus:border-primary bg-black placeholder:text-stone-500 "
							/>
						</div>
						<div>
							<label className="text-sm text-white " htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								// rows="5"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								placeholder='hello how are you'
								className="w-full p-4 rounded-xl focus:border-primary bg-black placeholder:text-stone-500 "
							/>
						</div>
						<button disabled className='bg-orange-500 w-full px-16 py-2 rounded-xl text-white text-xl font-bold uppercase disabled:bg-opacity-35' type="submit">Submit</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
