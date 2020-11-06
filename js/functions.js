function addListItem(input) {
  $('.to-do-list > ul').append('<li>' + input.val() + '<button>X</button></li>');
  input.val("");
  $('.input-item').focus();
}

function delListItem() {
  $(this).parent().remove();
}
