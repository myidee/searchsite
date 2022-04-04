//Search a specific site rather than the entire Web.
function search() {
    //Replace sample domain name below with your own domain name.
    var site = 'douglascollege.ca';
    var lookfor = document.getElementById("txtlookfor").value;


    if (lookfor.length > 0) {
        var query = "http://www.google.com/search?q=" + encodeURIComponent(lookfor) + "site:" + site;

        var ddchoice = document.getElementById('dropdown').value;

        if (ddchoice == "1") {
            var query =
                'https://www.bing.com/search?q=' +
                encodeURIComponent(lookfor) +
                ' site:' +
                site;
        } else {
            var query =
                'https://www.google.com/search?q=' +
                encodeURIComponent(lookfor) +
                ' site:' +
                site;
        }

        console.log(query)


        location.href = query;
    }
    else {
        //If textbox was empty, show an alert.
        alert('Please type the word or words for which you want to search.');
    }



    console.log(query)


}