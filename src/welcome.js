//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Welcome to the Aurelia Navigation Browser History State Test App!';


  saveData() {
    let data = "This is the data we're saving";
    window.history.replaceState(data, null, null);
    console.log("Data saved", window.history.state);
  }

  seeData() {
    console.log("Data from window.history.state", window.history.state);
  }

}
