// maps: maps
// audio recordings: audio
// photo, print, drawing: photos
// manuscripts/mixed material: manuscripts
// newspapers: newspapers
// film, videos: film-and-videos
// printed music, such as sheet music: notated-music
// archived websites: websites

userInput = "california"
searchFormat = "photos"
mainDiv = document.getElementById("main");

var url = `https://www.loc.gov/${searchFormat}/?q=${userInput}&fo=json`;
console.log(url)
fetch(url)
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.featured_items.length; i++)
    updatePage(data.featured_items[i])
}
    )



function updatePage(firstFeature){

    currentImage = document.createElement("div");
    currentImage.innerHTML = firstFeature.image;
    mainDiv.append(currentImage);

    currentTitle = document.createElement("div");
    currentTitle.innerHTML = firstFeature.title;
    mainDiv.append(currentTitle);



}