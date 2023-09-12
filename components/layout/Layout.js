import Link from 'next/link';
import classes from './Layout.module.css';
const Layout = ({ children }) => {
	return (
		<div className={classes.layout}>
			<ul className={classes.navigation}>
				<li>
					<Link href='/news'>News page</Link>
				</li>
				<li>
					<Link href='/about'>About page</Link>
				</li>
			</ul>

			<main>{children}</main>

			<footer className={classes.footer}>this is footer</footer>
		</div>
	);
};

export default Layout;
