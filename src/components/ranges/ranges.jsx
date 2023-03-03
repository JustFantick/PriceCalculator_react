import React, { useEffect, useState } from 'react'

export default function Ranges(props) {
	return (
		<div className="form-block ranges">
			<div className="ranges__item">
				<label htmlFor="storage">Storage: {props.storageVal} GB</label>
				<input type="range" name="storage" id="storage" min={0} max={1000} step={1}
					onInput={(e) => props.setStorageVal(parseInt(e.target.value))} />
			</div>

			<div className="ranges__item">
				<label htmlFor="transfer">Transfer: {props.transferVal} GB</label>
				<input type="range" name="transfer" id="transfer" min={0} max={1000} step={1}
					onInput={(e) => props.setTransferVal(parseInt(e.target.value))} />
			</div>

		</div>)
}
