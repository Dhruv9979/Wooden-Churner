import React from 'react';

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
	    <div className="title">
			<h1>{title.toUpperCase()}</h1>
		</div>
	    <div className="preview">
	        {items
	            .filter((item, index) => index < 4 )
	            .map(({ id, ...otherItemProps }) => (
	                    <CollectionItem key={id} {...otherItemProps}/>
	                ))}
	    </div>
	</div>
	// <div className="collection-preview">
	// 	<div className="title">
	// 		<h1>{title.toUpperCase()}</h1>
	// 	</div>
	// 	<div className={`preview cell-${cellNumber + 1}`}>2.</div>
	// 	<div className={`preview cell-${cellNumber + 1}`}>3.</div>
	// 	<div className={`preview cell-${cellNumber + 1}`}>4.</div>
	// 	<div className={`preview cell-${cellNumber + 1}`}>5.</div>
	// </div>
);

export default CollectionPreview;