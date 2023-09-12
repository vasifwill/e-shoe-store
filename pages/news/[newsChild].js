import { useRouter } from 'next/router';
const NewsChild = () => {
	const router = useRouter();

	const paramName = router.query.newsChild;
	console.log(paramName);
	return (
		<div>
			<h1> News Child - {paramName}</h1>
			<p>This is detail about {paramName} news.</p>
		</div>
	);
};

export default NewsChild;
