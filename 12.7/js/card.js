// KLASA KANBAN CARD
function Card(id, name) {
  var self = this;
  
  this.id = id;
  this.name = name || 'No name given';
  this.element = createCard();

  function createCard() {
    var card = $('<li class="card"></li>');
    var cardDeleteBtn = $('<button class="btn-delete">x</button>');
    var cardEditBtn = $('<button class="btn-edit-card">Ed</button>');
    var cardDescription = $('<p class="card-description"></p>');
    
    cardDeleteBtn.click(function(){
      self.removeCard();
    });

    cardEditBtn.click(function(){
      self.editCard();
    });
    
    card.append(cardDeleteBtn);
    card.append(cardEditBtn);
    cardDescription.text(self.name);
    card.append(cardDescription)
    return card;
  }
}

Card.prototype = {
  removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.element.remove();
      }
    });
  },

  editCard: function() {
    var self = this;
    var newName = prompt('Enter a new name of card',
      this.element.children('.card-description').text());
    var columnId = this.element.closest('.column').attr('id');
    /*UNDEFINED COLUMN!*/
    console.log($(this).closest('.column').attr('name'));
    console.log(columnId);
    /**/
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'PUT',
      data: {
        id: self.id,
        name: newName,
        bootcamp_kanban_column_id: columnId
      },
      success: function(response) {
        self.element.children('.card-description').text(newName);
      }
    });
  }
}