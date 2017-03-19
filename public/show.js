function getDBData() {
 var queryID = window.location.search.substring(1)
 console.log(queryID);
 $.get(`/movies/${queryID}`)

  .then(function (movies) {
    var prevtitle = movies.title;
    var prevdir = movies.director;
    var prevYear = movies.year;
    var prevRat = movies.myrating;
    var prevURL = movies.posterurl;
    console.log(prevtitle);
    $('.showMovie').append(`Title: <input type="text" name="title" value="${prevtitle}" class="title" ><br>
    Director: <input type="text" value="${prevdir}" name="director" class="director" ><br>Year <input type="text" name="year" value="${prevYear}"  class="year"><br>My Rating: <input type="text" name="myrating" value="${prevRat}" class="myrating"><br>Poster Url: <input type="text" name="url" value="${prevURL}" class="posterurl" ><br>`)
    $('.poster').append(`<img src="${prevURL}" >`)
  })
}
$(function () {
 getDBData()
})
