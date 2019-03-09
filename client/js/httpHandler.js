(function() {

  debugger;
  const serverUrl = 'http://127.0.0.1:3000';

  setInterval(() => {

    $.ajax({
      method: 'GET',
      url: serverUrl,
      success: (data) => {
        console.log(data);
        SwimTeam.move(data.toString());
      },
      error: () => (console.log('Failed GET Request'))

    })

    /* Pseudo Code

    Prepare + Send AJAX Request to Server
      use serverURL
      determine callback



    Note: Need tests of output!
    */

  }, 100);

})();
