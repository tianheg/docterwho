import React, { useState, useEffect } from "react";
import data from "./doctorwho.json";

const seasonRanges = {
	season1: { start: 1, end: 13 },
	season2: { start: 14, end: 27 },
	season3: { start: 28, end: 41 },
	season4: { start: 42, end: 60 },
	season5: { start: 61, end: 73 },
	season6: { start: 74, end: 87 },
	season7: { start: 88, end: 104 },
	season8: { start: 105, end: 116 },
	// Add more seasons as needed
};
function getSeasonData(season) {
	const range = seasonRanges[season];
	if (!range) return [];

	return data.slice(range.start - 1, range.end);
}

export default function Pagination() {
	const [currentSeason, setCurrentSeason] = useState("season1");
	const [seasonData, setSeasonData] = useState(getSeasonData(currentSeason));

	useEffect(() => {
		setSeasonData(getSeasonData(currentSeason));
	}, [currentSeason]);

	const changeSeason = (season) => {
		setCurrentSeason(season);
	};

	return (
		<>
			<div className="flex justify-center mb-6">
				<select
					className="select select-bordered"
					value={currentSeason}
					onChange={(e) => changeSeason(e.target.value)}
				>
					{/* Start list of seasons available */}
					<option value="season1">Season 1</option>
					<option value="season2">Season 2</option>
					<option value="season3">Season 3</option>
					<option value="season4">Season 4</option>
					<option value="season5">Season 5</option>
					<option value="season6">Season 6</option>
					<option value="season7">Season 7</option>
					<option value="season8">Season 8</option>
					<option value="season9">Season 9</option>
					<option value="season10">Season 10</option>
					<option value="season11">Season 11</option>
					<option value="season12">Season 12</option>
					<option value="season13">Season 13</option>
					<option value="season14">Season 14</option>
					{/* End list of seasons available */}
				</select>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
				{seasonData.map((episode) => (
					<div key={episode.id} className="p-4 bg-red-100 rounded-lg shadow-md">
						<div className="card-body">
							<div className="flex">
								<img
									src="/tardis.png"
									className="animate-pulse float-right w-12 h-12"
									alt="Tardis Icon"
								/>
								<style jsx>{`
									.animate-pulse {
										animation: pulse 2s ease-in-out infinite;
									}
									@keyframes pulse {
										0% {
											opacity: 1;
										}
										25% {
											opacity: .65;
										}
										50% {
											opacity: 1;
										}
										75% {
											opacity: .65;
										}
										100% {
											opacity: 1;
										}
									}
								`}</style>
								<h2 className="card-title text-xl font-semibold mb-2">
									{episode.episode_title}
								</h2>
							</div>

							<p className="text-gray-700 mb-2">
								{episode.doctor_actor} as the Doctor
							</p>
							<p className="text-gray-600 line-clamp-3 mb-2">
								{episode.summary}
							</p>
							<p className="text-gray-600">
								<strong>Companion:</strong> {episode.companion}
							</p>
							<p className="text-gray-600">
								<strong>Location:</strong> {episode.episode_location}
							</p>
							<p className="text-gray-600">
								<strong>First Air:</strong> {episode.air_date}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
