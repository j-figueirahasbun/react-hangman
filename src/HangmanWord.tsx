
type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal? : boolean
}

export function HangmanWord({guessedLetters, wordToGuess, reveal = false} : HangmanWordProps){
    //What we wanna do is take in some word so we will set a variable here for now 'test'
    return <div style={{
        //this is mostly for organisation and the font size
        display : "flex", //this is to make it easy for us to line everything up
        gap: ".25em", 
        fontSize: "6rem",  
        fontWeight: "bold", 
        textTransform: "uppercase", 
        fontFamily: "monospace", 

    }}
    >
    {/* now what we want to do is render each letter of the word defined above individually: */}

    {wordToGuess.split("").map((letter, index) => (
        <span style={{
            borderBottom: ".1em solid black",}} key = {index}>
            <span style={{
                visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}>{letter}</span>
        </span>
    ))}  
    {/* ^this is going to split the word into individual letters, then we want to map over the letters
    and get the index of the letters location. When we are done with that we can run a function with that 
    information, and you want to ultimately return the information that we are going to render out, in our 
    case, we want to render out a single <span> with that letter.
    so the span shows the letter, and we add the style to show the bottom border of the span...
    We add an additional span inside the og span in order to show the letter, and this span will decide 
    if the letter will be shown or if it will be hidden, and what collor it will be.
    
    we will also have a const of guessedLetters to show the letters we have guessed correctly (check the top)
    
    The final thing we want to do is to add the key in the span, and it is said not to use the index as actual key
    but in our case the index is the unique identifier for the letter in the word because each index of the word
    will be a different letter that is different.
    */}
    </div>
}