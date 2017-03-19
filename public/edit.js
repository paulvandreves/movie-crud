function getDBData() {
 var appArr = [];
 var queryID = window.location.search.substring(1)
 console.log(queryID);
 // send  a get to the object at that query string
 // poster url to img tag
 // declare prev title

// shout get string id values not ints
 $.get(`/movies/${queryID}`)
  .then(function (movies) {
    var prevtitle = movies.title;
    var prevdir = movies.director;
    var prevYear = movies.year;
    var prevRat = movies.myrating;
    var prevURL = movies.posterurl;
    $('.edit').append(`Title: <input type="text" name="title" value="${prevtitle}" class="title" ><br>
    Director: <input type="text" value="${prevdir}" name="director" class="director" ><br>Year <input type="text" name="year" value="${prevYear}"  class="year"><br>My Rating: <input type="text" name="myrating" value="${prevRat}" class="myrating"><br>Poster Url: <input type="text" name="url" value="${prevURL}" class="posterurl" ><br>`)
    $('.poster').append(`<img src="${prevURL}" >`)
  });
 $(document).on(`click`, `.save`, function (e) {
  e.preventDefault();
  console.log("Edit button working ");
  // add varaibles for each input feild
  payload = {
    id: queryID,
   title: $(".title").val(),
   director: $('.director').val(),
   year: $('.year').val(),
   myrating: $('.myrating').val(),
   posterurl: $('.posterurl').val()
  }
  // what moive do I edit? where do I send this put
  console.log(payload);
  console.log(queryID);
  //  use edit button class to set id varaible
  $.ajax({ // how do I pass collected data to put request
    url: '/movies/' + queryID,
    method: 'PUT',
    type: "application/json",
    data: payload // missing find assign and write
   })
   .then((data) => {
    console.log(data);
   })
   .catch((err) => {
    console.log(err);
   });
 })

}
$(function () {
 getDBData()
})
