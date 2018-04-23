let Bplaypause, video, sourceVid, recherchButton;

function playpause()
{
	if (!video.paused)
	{
		video.pause();
		Bplaypause.innerHTML = "Play";
	}
	else
	{
		video.play();
		Bplaypause.innerHTML = "Pause";
	}
}

function rechercher()
{
	sourceVid = document.getElementById("sourceVid");
	ajouterListe(sourceVid.value);
}

function ajouterListe(url)
{
	let listeLecture = document.getElementById("listeLecture");
	let listLength = listeLecture.childNodes.length;

	let nouvelElem = document.createElement("div");
	nouvelElem.id = "elemList"+listLength;

	let boutonplay = document.createElement("button");
	boutonplay.classname = "ListButtonPlay";
	boutonplay.innerHTML = "Play";
	boutonplay.addEventListener("click", playElem(url));

	let content = document.createTextNode(url);

	nouvelElem.appendChild(content);
	nouvelElem.appendChild(boutonplay);
	listeLecture.appendChild(nouvelElem);

}

function playElem(url)
{
	video.src = url;
}

function main()
{
	video = document.getElementsByTagName('video')[0];
	recherchButton = document.getElementById('BRechercher');
	recherchButton.addEventListener("click", rechercher);

	Bplaypause = document.getElementById('Bplaypause');
	Bplaypause.addEventListener("click", playpause);

}
