document.getElementById('editBtn').addEventListener('click', function() {
    var inputs = document.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        input.removeAttribute('disabled');
    });
});