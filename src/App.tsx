import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  //So when you think about what are the different things you need to track/keep in mind
  //the things that are going to change the most that we are going to track is the word that we 
  //are tracking and the characters that we have currently clicked on or typed
  //Therefore, we will be creating 'state' for that information: 

  //Forexample, we will need a wordToGuess, and we will have a set function for that
  //and we will set that that equal to useState
  //If we want more words to dynamically populate it based on that list of words, we
  //need to import a list of common english words to use. This you can do with importing the list of words at the top
  //Then, in the useState, you can call a simple function that gets a random word from from that list -> () => 
  const [wordToGuess, setWordToGuess] = useState( () => { //simple function to call upon a random word
    // return from wordlist a random word, doing this with Math.floor of a random
    // number (gives random number (0,1) and can multiply that by words.length) and then you round that number 
    return words [Math.floor(Math.random() * words.length)]
  });

  //You can do a console log of the word to guess then to then get the word chosen for example:
  console.log(wordToGuess);

  //The next thing we need to track is the letters that have been guessed and the easiest way to do that is with an 
  //array, so we have the guessedLetters, then the setGuessedLetters just like above and we equal that to a useState, 
  //by default, we initialise this as an empty array of string specifically:
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])


  //to get input from actual keyboard, usually you use a customhook but this is simple so..:
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/))
        return

        e.preventDefault()
        addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])




  //so for the different components you see on screen, we can wrap them all up in a div
  return (
    //this is some kind of wrapper information to style everything within this div, also the other divs inside this div
    <div style = {{
      maxWidth: "800", // this is so the width stays the same even if you make it larger
      display: "flex", // this is so you can do a lot of different cool things with centering and everything
      flexDirection: "column", // this is because we want everything to stack on top of each other. 
      gap: "2rem", // this will space out all the different items with 2 rem
      margin: "0 auto", // center everything inside of my size of max width 800 pixels
      alignItems: "center", //align items int he center to center all the different objects in the middle

    }}> 
    <div style={{fontSize: "2rem", textAlign: "center"}}> 
    
    {isWinner && "Winner! - refresh the page to try again!"}
    {isLoser && "You Lost, loser!"}
    
    
    </div>
    
    {/* now after this section, you have 3 distinct sections  that we can create as custom components
    so we have: the drawing, the word to guess, and we have the keyboard, so we are going to create components of these: */}
    {/* These can be created in tsx files... */}
    <HangmanDrawing 
    
      numberOfGuesses = {incorrectLetters.length}

    /> 
    <HangmanWord 
    
    reveal = {isLoser}
    guessedLetters = { guessedLetters } wordToGuess = {wordToGuess}

    /> 
    <div style={{ alignSelf : "stretch"}}>
    <Keyboard 
    
    disabled = { isWinner || isLoser}

    activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}

    inactiveLetters = {incorrectLetters}

    addGuessedLetter = {addGuessedLetter}

    /> 
    </div>
    
    
    </div>
  );
}

export default App
