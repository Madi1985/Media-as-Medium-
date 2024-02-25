document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('redirectButton');
	if (button) {
			button.addEventListener('click', () => {
					window.location.href = 'page.html';
			});
	} else {
			const urlParams = new URLSearchParams(window.location.search);
			const postId = urlParams.get('post');
			if (postId) {
					console.log("Post ID:", postId);
			}
	}
});