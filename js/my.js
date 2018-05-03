$(document).ready(function(){
    $( '.nav .nav__list a' ).on( 'click', function () {
        $( '.nav .nav__list' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });
});
