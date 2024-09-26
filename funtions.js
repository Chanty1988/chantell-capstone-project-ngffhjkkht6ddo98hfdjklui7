 <script>
   debugger;{
          /************************************
Is userNumber less than 10?

STEPS:
1. Ask the user for a number.
2. Store the response in userText
3. Convert userText to a number.
4. Store the result userNumber.
5. Compare is userNumber less than 10.
6.Store the result in myResult. 
7.Display the vaule of myResult.

PSEUDO CODE:
userText <= Ask for a number
userNumber <= Convert userText
myResult <= Is userNumber < 10
Display myResult
*******************************/

  //STEPS: Ask the user for a number. Store the response in userText
  //PSEUDO: userText <= Ask for a number
  userText = prompt("Enter a number");

  //STEPS: Convert userText to a number. Store the result userNumber.
  //PSEUDO: userNUmber <= Convert userText
  userNumber = Number(userText);

  //STEPS: Compare is userNumber less than 10. Store the result in myResult.
  //PSEUDO: myResult <= Is userNumber < 10
  myResult = userNumber < 10;

  //STEPS: Display the vaule of myResult.
  //PSEUDO: Display myResult
  document.write("Is your number less than 10? " + myResult + "<br>");
   }
       function runProblem1() {
    /******************************
  Create a loop that repets 3 times and runs the "ask" command.

  STEPS:
  1. Store 0 in myCount
  2. Start a loop
  3. Run the ask command with "Enter a number"
  4. Store the result in userNumber
  5. Display userNumber
  6. Increment myCount
  7. Compare is myCount === 3
  8. Store it in done
  9. While not done, repeat

  PSEUDO CODE:
  myCount = 0
  Start a loop
    userNumber <<< prompt("Enter a number")
    Display userNumber
    Increment myCount
    isDone <<< myCount === 3
  While not isDone, repeat

  *******************************/

    //STEPS: Store 0 in myCount
    //PSEUDO: myCount = 0
    myCount = 0;

    //STEPS: Start a loop
    //PSEUDO:Start loop
    do {
      //STEPS: Run the ask command with "Enter a number". Store the result in userNumber
      //PSEUDO: userNumber <<< prompt("Enter a number")
      userNumber = prompt("Enter a number");

      //STEPS: Display userNumber
      //PSEUDO:Display userNumber
      document.write(userNumber);

      //STEPS: Increment myCount
      //PSEUDO: Increment myCount
      myCount++;

      //STEPS: Compare is myCount === 3. Store it in isDone
      //PSEUDO: isDone <<< myCount === 3
      isDone = myCount === 3;

      //STEPS: While not isDone, repeat
      //PSEUDO: While not isDone, repeat
    } while (!isDone);
  }
</script>
<script>
  runProblem1();
</script>