document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    
    var commentBlock = document.createElement('div');
    commentBlock.innerHTML = '<strong>' + name + '</strong>: ' + comment;
    
    document.getElementById('comments').appendChild(commentBlock);
    
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});
