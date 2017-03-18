function postData() {

  $(document).on(`click`, `.save`, function (e) {
   e.preventDefault();
   console.log("Add moive button working ");
   // add varaibles for each input feild
    // var id;
      $.get('/movies/')
      .then(function (movies,id) {
        var id = movies.length +=2;
        console.log(id);
       payload = {
        id: id,
        title: $('.title').val(),
        director: $('.director').val(),
        year: $('.year').val(),
        myrating: $('.myrating').val(),
        posterurl: $('.posterurl').val()
       }
       console.log(payload);
       $.ajax({
         url: '/movies/', // how is post in routes set up
         method: 'POST',
         type: "application/json",
         data: payload
        })
        .then((data) => {
         console.log(data);
        })
        .catch((err) => {
         console.log(err);
        });
      })
  }) // end of onclick
}
$(function() {
  postData()
})
