function showPublications(){
    $('#article-publications').show();
    $('#aside-publications').show();
    $('#article-projects').hide();
    $('#aside-projects').hide();
}

function showProjects(){
    $('#article-publications').hide();
    $('#aside-publications').hide();
    $('#article-projects').show();
    $('#aside-projects').show();
}

$('#show-publications').on('click', function(){
    showPublications();
});
$('#show-projects').on('click', function(){
    showProjects();
});


