const allIds = function() {
	const ids = [];

	this.allSlams().forEach((slam) => {
		ids.push(slam.id);
	});

	return ids;
};

export default allIds;
