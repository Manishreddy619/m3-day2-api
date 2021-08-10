// The goal of this exercise is to fetch data from the API instead of having them "wired up" in the page.

// Generate automatically 3 lists based on the "search API" response

// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem
// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth
// Load them during page load, and create the collections based on the API response.
// Make the central part of the page scrollable both horizontally and vertically
// Add a "List albums" button. When pressed, he should create and display a list of albums on the page
// Add a "Count Unique" button. When pressed, he should log the number of unique albums on the page
const getData = () => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '4e0134a148msh411d8fbe0fcb00bp1c42abjsna250f2ae5a8f',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((result) => {
			console.log(result.data);
			result.data.forEach(function (item) {
				console.log(item);

				const row = document.querySelector('.row');
				row.innerHTML += `
              
                <div class="card" >
                <img src="${item.album.cover_big}" class="card-img-top img" alt="${item.album.title}">
            <div class="card-body">
               <h5 class="card-title">${item.title_short}</h5>
              <p class="card-text">${item.title}</p>
              <a href="#" class="btn btn-primary">${item.album.type}</a>
  </div>
</div> `;
			});
		})

		.catch((err) => {
			console.error(err);
		});
};
const getUniqueData = () => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '4e0134a148msh411d8fbe0fcb00bp1c42abjsna250f2ae5a8f',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((result) => {
			console.log(result.data);
			let arr = [];
			let newarr;
			result.data.forEach(function (item) {
				console.log(item);
				arr.push(item.album.title);
				newarr = arr.filter((el, i) => arr.indexOf(el) === i);
				console.log(newarr);
			});
			newarr.forEach((el, i) => {
				const row = document.querySelector('.row-1');
				row.innerHTML += `<div><li>${el}</li></div>`;
			});
			result.data.forEach(function (item) {
				for (let song of newarr) {
					if (item.album.title === song) {
						const row = document.querySelector('.unique');
						row.innerHTML += `
              
                <div class="card" >
                <img src="${item.album.cover_big}" class="card-img-top img" alt="${item.album.title}">
            <div class="card-body">
               <h5 class="card-title">${item.title_short}</h5>
              <p class="card-text">${item.title}</p>
              <a href="#" class="btn btn-primary">${item.album.type}</a>
  </div>
</div> ;`;
					}
				}
			});
		})

		.catch((err) => {
			console.error(err);
		});
};
// window.addEventListener('load', (event) => {
// 	getData();
// });
