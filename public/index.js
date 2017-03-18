function getDBData() {
 var appArr = [];
 var queryID = window.location.search.substring(1)
 $.get('/movies')
  .then(function (movies) {
   $.each(movies, function (key, obj) {
    var id = obj.id;
    $('.tbody').append($(`<tr class=tr${id}>`));
    for (var prop in obj) {
      // can I say if obj[prop] === id dont append?
      if(obj[prop]=== obj.title){
        console.log(obj[prop]);
          $(`.tr${id}`).append(`<a href="show.html?${id}" >${obj.title}</a>`)
      }
      if(obj[prop]=== obj.director){
          $(`.tr${id}`).append(`<td>` + obj[prop] + '</td>')
      }
      if(obj[prop]=== obj.year){
        $(`.tr${id}`).append(`<td>` + obj[prop] + '</td>')
      }
      if (obj[prop]=== obj.myrating) {
        $(`.tr${id}`).append(`<td>` + obj[prop] + '</td>')
      }
    }
    $(`.tbody`).append(`<button class="dl${id}"> Delete </button>`)
    $(`.tbody`).append(`<a href="edit.html?${id}"  class=""> Edit </a>`)
   });
  });
// append form feilds for edit .html


 // delete a movie when clicked
 $(document).on(`click`, `button.dl0, .dl1, .dl2, .dl3, .dl4, .dl5, .dl6, .dl7, .dl7`, function (e) {
  $('.' + this.className).remove()
  var id = $(this).attr('class').substring(2, 3)
  $(`.tr${id}`).remove()
  $.ajax({
    url: '/movies/' + id,
    method: 'Delete',
   })
   .then((data) => {
    console.log(data);
   })
   .catch((err) => {
    console.log(err);
   });
 })
 // did we link index .js
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
