import React from 'react';

export default function Chart(props) {
	return (
		<div className="form-block chart">
			<div className="chart__label grid-label-1">
				<div>Backblaze</div>

				<img src={require('../../img/backblaze-icon.png')} alt="backblaze-icon" />
			</div>
			<div className="chart__progress-bar-container backblaze">
				<div className="progress-bar"></div>
				<div className="progress-bar-label">{props.pricesArray[0]}$</div>
			</div>

			<div className="chart__label bunny grid-label-2">
				<div className="bunny__body">
					<div>Bunny</div>
					<div className="bunny__radio">
						<label htmlFor="hdd"><input type="radio" name="bunny" id="hdd" value="hdd"
							checked={props.bunnyOption === 'hdd'}
							onChange={(e) => { props.setBunnyOption(e.target.value) }} />hdd</label>

						<label htmlFor="ssd"><input type="radio" name="bunny" id="ssd" value="ssd"
							checked={props.bunnyOption === 'ssd'}
							onChange={(e) => { props.setBunnyOption(e.target.value) }} />ssd</label>

					</div>
				</div>
				<img src={require('../../img/bunny-icon.png')} alt="bunny-icon" />

			</div>
			<div className="chart__progress-bar-container bunny">
				<div className="progress-bar"></div>
				<div className="progress-bar-label">{props.pricesArray[1]}$</div>
			</div>

			<div className="chart__label scaleway grid-label-3">
				<div className="scaleway__body">
					<div>Scaleway</div>
					<div className="scaleway__radio">
						<label htmlFor="single"><input type="radio" name="scaleway" id="single" value="single"
							checked={props.scalewayOption === 'single'}
							onChange={(e) => { props.setScalewayOption(e.target.value) }} />
							single
						</label>
						<label htmlFor="multi"><input type="radio" name="scaleway" id="multi" value="multi"
							checked={props.scalewayOption === 'multi'}
							onChange={(e) => { props.setScalewayOption(e.target.value) }} />
							multi
						</label>

					</div>
				</div>
				<img src={require('../../img/scaleway-icon.png')} alt="scaleway-icon" />

			</div>
			<div className="chart__progress-bar-container scaleway">
				<div className="progress-bar"></div>
				<div className="progress-bar-label">{props.pricesArray[2]}$</div>
			</div>

			<div className="chart__label grid-label-4">
				<div>Vultr</div>
				<img src={require('../../img/vultr-icon.png')} alt="vultr-icon" />

			</div>
			<div className="chart__progress-bar-container vultr">
				<div className="progress-bar"></div>
				<div className="progress-bar-label">{props.pricesArray[3]}$</div>
			</div>

		</div>
	)
}
