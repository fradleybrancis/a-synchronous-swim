(function() {

  const serverUrl = 'http://127.0.0.1:3000';

 setInterval(() => {

    $.ajax({
      method: 'GET',
      url: serverUrl,
      success: (data) => {
        SwimTeam.move(data.toString());
      },
      error: () => (console.log('Failed GET Request'))

    })
  }, 100);

})();
