Quiz!

1. What is a React component?
 ->Component is independent and reausuable fucntion,written in isolated which form as DOM elemet and called when their is need of it.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
->function First letter is not capital

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
->Here while calling component code should be <Header/> instead of Header()