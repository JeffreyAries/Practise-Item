function sort() {
    var list, switching, b, shouldSwitch;
    list = document.getElementById("name");
    
    
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("li");
      //Loop through all list items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.charAt(0) > b[i + 1].innerHTML.charAt()) {
          /*if next item is alphabetically lower than current item,
          mark as a switch and break the loop:*/
          shouldSwitch= true;
          break;
        }
      }
      if (shouldSwitch) {
          console.log(i)
        /*If a switch has been marked, make the switch
        and mark the switch as done:*/
        
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
