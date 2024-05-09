// Input Variables
const divListContainer = document.getElementById("list-item-container");
const inputFirstName = document.getElementById("jsFirstName");
const inputLastName = document.getElementById("jsLastName");
const inputFriendTimeList = document.getElementById("jsFriendTime");
const inputFavoriteGame = document.getElementById("jsFavoriteGame");
const inputFavoriteBook = document.getElementById("jsFavoriteBook");
const sortSelect = document.getElementById("jsSortBy");

// Stop Page to refrash on submit
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Main Object List
listObj = [{
       firstNameList: "Bogdan",
       lastNameList: "Acatrinei",
       friendTimeList: "10",
       favoriteGameList: "World of Warcraft",
       favoriteBookList: "Around the World in 80 days"
       },{
       firstNameList: "Iulian",
       lastNameList: "Lupu",
       friendTimeList: "17",
       favoriteGameList: "Minecraft",
       favoriteBookList: "DUNE"
       },{
       firstNameList: "Victor",
       lastNameList: "Grigore",
       friendTimeList: "1",
       favoriteGameList: "FarCry 3",
       favoriteBookList: "Lord of the Rings 2",
       },{
       firstNameList: "Daniel",
       lastNameList: "Dumitru",
       friendTimeList: "15",
       favoriteGameList: "Assassins Creed 2",
       favoriteBookList: "Harry Potter 4"
       },{
       firstNameList: "Grigore",
       lastNameList: "Cercel",
       friendTimeList: "7",
       favoriteGameList: "Prince Of Persia",
       favoriteBookList: "DUNE"
  }];

// Update function
function updateList(){
  divListContainer.innerHTML = "";

    listObj.map((item) => {
    divListContainer.innerHTML += `
    <div class="friend-list-card">
    <p><strong>Fullname:</strong> <br> <span>${item.firstNameList + " " + item.lastNameList}</span> </p>
    <p><strong>Years we have been friends:</strong> <br> <span>${item.friendTimeList} Years </span> </p>
    <p><strong>Favorite Game:</strong> <br> <span>${item.favoriteGameList}</span> </p>
    <p><strong>Favorite Book:</strong> <br> <span>${item.favoriteBookList}</span> </p>
    <div class="delete-friend-button">
      <input type="button" value="Delete" onclick="deleteFriend('${item.firstNameList}')">
    </div>
    </div>
    `;
});
}

// Initail List
updateList();

// Save New Friend Function
function saveFriend() {
  listObj.push({
    firstNameList: inputFirstName.value,
    lastNameList: inputLastName.value,
    friendTimeList: inputFriendTimeList.value, 
    favoriteGameList: inputFavoriteGame.value, 
    favoriteBookList: inputFavoriteBook.value
  });

    updateList();

    inputFirstName.value = "";
    inputLastName.value = "";
    inputFriendTimeList.value = "";
    inputFavoriteGame.value = "";
    inputFavoriteBook.value = "";
   
}


// Delete Existing Friend Function
function deleteFriend(obj){
index = listObj.findIndex(x => x.firstNameList === obj);
listObj.splice(index, 1);
updateList();
}

// Sort Existing Friend Function
function sort(){
  if(sortSelect.value === "byNames"){
    function compare( a, b ) {
      if (a.firstNameList < b.firstNameList) {
        return -1;
      }
      if (a.firstNameList > b.firstNameList) {
        return 1;
      }
      return 0;
    }
    listObj.sort( compare );
    updateList();
  }else if(sortSelect.value === "byNamesReverse"){
    function compare( a, b ) {
      if (a.firstNameList > b.firstNameList) {
        return -1;
      }
      if (a.firstNameList < b.firstNameList) {
        return 1;
      }
      return 0;
    }
    listObj.sort( compare );
    updateList();
  } else if(sortSelect.value === "bylongTime"){
    listObj.sort((a, b) => parseFloat(b.friendTimeList) - parseFloat(a.friendTimeList));
    updateList();
  }else if(sortSelect.value === "byLessTime"){
    listObj.sort((a, b) => parseFloat(a.friendTimeList) - parseFloat(b.friendTimeList));
    updateList();
  }
}

// Search Filter Function
function filterSelection(selectedList){
  console.log("Test");

}

function searchFilter() {
  filterSelection();
  
console.log("Test");
}