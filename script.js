const postItems = [
	{
		id: "1",
		author: "Author1",
		title: "7 Prastical CSS Tips",
		img: "./Mac_img.png",
		description: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
		bottom: "Java Script",
		infotime: "12 min read",
		selected: "Selected for you"
	},

	{
		id: "2",
		author: "Author2",
		title: "Today is summy day!",
		img: "./painter.png",
		description: " Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
		bottom: "Java Script",
		infotime: "12 min read",
		selected: "Selected for you"
	},

	{
		id: "3",
		author: "Author3",
		title: "Today is summy day!",
		img: "./yoga.png",
		description: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
		bottom: "Java Script",
		infotime: "12 min read",
		selected: "Selected for you"
	}
];

const article = 
`
<div class="mt-5 d-flex justify-content-between border">
<div id="postItems"></div>
</div>
`;

const articles = document.getElementById("articles");
/* const InfoBottom = document.getElementById("infoBottom"); */
const spinner = `<div id="spinner" class="spinner-border" role="status"></div>`;

const loadPosts = () => {
	const promisePosts = new Promise((resolve, reject) => {
	articles.innerHTML = spinner;
  setTimeout(() => resolve(postItems), 2000);
	});

	promisePosts.then((postItems) => {
	const spinnerId = document.getElementById('spinner');
	spinnerId.remove();

		postItems.map((post) => {
			let newArticle = article.replace(
				`<div id="postItems"></div>`, 
			  `  <div class="conteiner p-3">
			<div class="row">
				<div class="col-md-8">
					<div class="d-flex flex-column justify-content-between h-100">
						<div>
							<div class="d-flex align-items-center mb-2">
								<span class="badge bg-secondary">Author's name in Topics Name</span>
								<span class="ms-2 text-muted">· 7 July</span>
							</div>
							<h5 class="mb-1">${post.title}</h5>
							<p class="mb-3">${post.description}</p>
						</div>
						<div class="d-flex flex-row gap-2">
							<buttom class="badge bg-primary">JavaScript</buttom>
							<span class="text-muted">${post.infotime} read · ${post.selected}</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<img src="${post.img}" class="img-fluid" alt="Image">
				</div>
			</div>
				
		</div>`
			);

	

			articles.innerHTML += newArticle;
	  })

	});
};

loadPosts();




 /*<img id="1" class="w-25" src="./Mac_img.png" alt="new image" />*/