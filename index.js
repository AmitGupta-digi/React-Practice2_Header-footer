/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react"
import ReactDOM from "react-dom"
// import logo from "react-logo"

function Page1(){
    return <header>
    <nav>
    <img src="./react-logo.png" width='80'/>
    </nav></header>
}
function Page2(){
    return <footer> "© 20xx Anonymous development. All rights reserved."
    </footer>}

function Page() {
    return (
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
    )
}

function MasterPage(){
    return(
        <>
        <Page1/>
        <Page/>
        <Page2/>
        </>
    )
}
ReactDOM.render(<MasterPage />, document.getElementById("root"))