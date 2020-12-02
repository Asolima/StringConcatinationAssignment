import React from "react";
import "./styles.css";

export default function App() {
  const [draft, setDraft] = React.useState("");
  let words = [];
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i];
    }
    return reversed;
  }
  function retrv(text) {
    words = [];
    document.getElementById("out").value = "";
    words = text.split(/[^a-z]/i);
    if (words.length != 3) {
      document.getElementById("out").value = "Please Enter 3 values!";
      return;
    }
    var ele = document.getElementsByName("num");
    var reversecheck = document.getElementsByName("reverse1");

    if (reversecheck[0].checked) {
      words[0] = reverseString(words[0]);
      words[1] = reverseString(words[1]);
      words[2] = reverseString(words[2]);
    }

    if (ele[0].checked) {
      document.getElementById("out").value += words[0] + " ";
      document.getElementById("out").value += words[1] + " ";
      document.getElementById("out").value += words[2];
    }
    if (ele[1].checked) {
      document.getElementById("out").value += words[0] + " ";
      document.getElementById("out").value += words[2] + " ";
      document.getElementById("out").value += words[1];
    }
    if (ele[2].checked) {
      document.getElementById("out").value += words[1] + " ";
      document.getElementById("out").value += words[0] + " ";
      document.getElementById("out").value += words[2];
    }
    if (ele[3].checked) {
      document.getElementById("out").value += words[1] + " ";
      document.getElementById("out").value += words[2] + " ";
      document.getElementById("out").value += words[0];
    }
    if (ele[4].checked) {
      document.getElementById("out").value += words[2] + " ";
      document.getElementById("out").value += words[0] + " ";
      document.getElementById("out").value += words[1];
    }
    if (ele[5].checked) {
      document.getElementById("out").value += words[2] + " ";
      document.getElementById("out").value += words[1] + " ";
      document.getElementById("out").value += words[0];
    }
  }

  return (
    <div className="App">
      <h1>Programming Pracice</h1>
      <p>
        {" "}
        Enter 3 strings using ANY seperator. You can use spaces, commas,
        newlines, etc. However, Only use 1 seperator. So 1, 2, 3 is NOT accepted
        because it uses both spaces and commas. You can then use the radio
        buttons to select the order of the output and check Reverse if you want
        the strings to be reversed. In additition, you can always edit the text
        and resubmit!
      </p>
      <textarea
        placeholder="Please Enter Words Here..."
        id="in"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
      ></textarea>
      <textarea placeholder="Output" id="out" disabled></textarea>
      <br></br>
      <br></br>
      <br></br>
      <input type="radio" id="1" name="num" value="1,2,3" />
      <label for="1">1 , 2 , 3</label>
      <br></br>
      <input type="radio" id="2" name="num" value="1,3,2" />
      <label for="2">1 , 3 , 2</label>
      <br></br>
      <input type="radio" id="1" name="num" value="2,1,3" />
      <label for="3">2 , 1 , 3</label>
      <br></br>
      <input type="radio" id="2" name="num" value="2,3,1" />
      <label for="4">2 , 3 , 1</label>
      <br></br>
      <input type="radio" id="1" name="num" value="3,1,2" />
      <label for="5">3 , 1 , 2</label>
      <br></br>
      <input type="radio" id="2" name="num" value="3,2,1" />
      <label for="6">3 , 2 , 1</label>
      <br></br>
      <input type="checkbox" id="reverse" name="reverse1" />
      <label for="reverse"> Reverse </label> <br></br>
      <button onClick={() => retrv(draft)}>Submit</button>
    </div>
  );
}
