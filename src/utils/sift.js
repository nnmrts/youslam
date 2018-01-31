const sift = function(path) {
	const unzippedPath = this.unzipPath(path);
	const siftedObject = this;

	siftedObject.allCountries((country) => {
		if (country !== unzippedPath.country) {
			delete this[country];
		}
	});

	if (unzippedPath.level1) {
		siftedObject.allLevel1s((country, level1) => {
			if (level1 !== unzippedPath.level1) {
				delete this[country][level1];
			}
		});
		if (unzippedPath.level2) {
			siftedObject.allLevel2s((country, level1, level2) => {
				if (level2 !== unzippedPath.level2) {
					delete this[country][level1][level2];
				}
			});

			if (unzippedPath.level3) {
				siftedObject.allLevel3s((country, level1, level2, level3) => {
					if (level3 !== unzippedPath.level3) {
						delete this[country][level1][level2][level3];
					}
				});
			}
		}
	}

	return siftedObject;
};

export default sift;
