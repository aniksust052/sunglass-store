import React from 'react';
import '../styles/button.scss';
import '../styles/display.scss';


const Nav = ( { data } ) => {
	return (
		<div className="mx-w navDisp">
			<div>
				<img src = {data.logo} alt={data.name} />
			</div>
			<div className="menuBar">
				<nav >
					<ul className="menuList">
						{ data.menu.map( (el, i) => {
							return (
								<li key={i}><a href={el.url}>{el.name}</a></li>
							);
						})}
					</ul>
				</nav>
				<a href={data.btnUrl} className="navDownload">{data.btnText}</a>
			</div>
			
		</div>
	);
};

export default Nav;
