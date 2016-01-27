function onLoadCallback()
{
    gapi.client.setApiKey('AIzaSyBhA0lq7C6pXMK_zESGRoGmOCt032baDP8'); //set your API KEY
    gapi.client.load('plus', 'v1', getAvatar);//Load Google + API

}

function loginGooglePlus(){
    var myParams = {
        'clientid' : '104219962027-00qq49h7rd9ri48ul41jll3j1fnhu613.apps.googleusercontent.com', //You need to set client id
        'cookiepolicy' : 'single_host_origin',
        'callback' : 'gplusLoginCallback',
        'approvalprompt':'auto',
        'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };
    gapi.auth.signIn(myParams);
}

function gplusLoginCallback(response){
    if(response.status.signed_in){
        saveKeyToStorage('googleplus',response.access_token);

        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });
        request.execute(function(result){
            console.log(JSON.stringify(result));
            saveUserToStorage(
                result['id'],
                result['displayName'],
                result['name']['givenName'],
                result['name']['familyName'],
                result['emails'][0]['value'],
                result['image']['url']
            );
            window.location="/dashboard";
        });
    }
    else{
        alert('Google+ login failed');
    }
}