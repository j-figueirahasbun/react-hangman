//This is the most complex component to write because of the css complexities

//To show the hangman person itself, we need to create the different elements (head body etc)
//These will be put in variables because we need to dyamically show these whether or not the word is guessed etc.

const head = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px", 
        right: "-30px",
    }}/>
)

const body = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px", 
        right: 0
    }}/>
)

const rightArm = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px", 
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom" 
        // ^ this is to tell ti that we want to offset based on the left bottom position of the arm
        //meaning that the rotation will be occuring on the bottom left hand of our arm so the left side will stay where its at 
        //when the rotation occurs 
    }}/>
)

const leftArm = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px", 
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom" 
    }}/>
)

const rightLeg = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px", 
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom" 
    }}/>
)

const leftLeg = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px", 
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom" 
    }}/>
)

const bodyparts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps){
    //simple return because there isnt really any logic that goes into this, just css style
    //We will return a simple div to wrap everything in, and we will give it postion relative, and 
    //that is going to make it so that we can absolutely position all the different body parts of our
    //hangman person inside of the container (the div) 

    //To start, we first want the pole and the bottom part to already be a part of it, so that it shows up 
    //already upon initialisation. 

    //So we can start with including divs that all are self closing <div /> and each have different style
    //on them basically. 
    return <div style = {{position: "relative"}}>
        {bodyparts.slice(0, numberOfGuesses)}
        <div style={{height: "50px", width: "10px", background: "black",
        marginLeft: "120px",position:"absolute", top:0, right:0}}/>
        <div style={{height: "10px", width: "200px", background: "black",
        marginLeft: "120px"}}/>
        <div style={{height: "400px", width: "10px", background: "black",
        marginLeft: "120px"}}/>
        <div style={{height: "10px", width: "250px", background: "black"}}/>
    </div>
}