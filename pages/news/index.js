import Link from 'next/link';

const News = () => {
	return (
		<div>
			<h2>News page</h2>

			<ul>
				<li>
					<Link href='/news/news-one'>News One</Link>
				</li>
				<li>
					<Link href='/news/news-two'>News Two</Link>
				</li>
				<li>
					<Link href='/news/news-three'>News Three</Link>
				</li>
			</ul>
		</div>
	);
};

export default News;
