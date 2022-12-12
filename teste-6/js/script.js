function MyFunction(){
    var show = document.getElementById('senha');
    if(show.type=='password'){
        show.type='text';
    }
    else{
        show.type='password';
    }
}