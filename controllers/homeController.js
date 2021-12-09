exports.showJobs = (req, res) => {
	res.render('home', {
		pageName: 'devJobs',
		tagline: 'Find and publish jobs for web developers',
		bar: true,
		button: true,
	})
}
