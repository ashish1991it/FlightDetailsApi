$(document).ready(function() {
    $('#example').DataTable( {
         destroy: true,
        // "paging":   true,
        // "pagingType": "full_numbers",
        "lengthChange": true,
        // "lengthMenu":true,
        "pageLength":"6"
    } );
} );