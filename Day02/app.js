// const element = React.createElement('h1', {id: 'title'}, "hello world");

// const element2 = React.createElement('div' , null,
//     React.createElement('h1' , null , "hello"),
//     React.createElement('h1' , null , "world")
// );


// const element = <h1 id="title">hello shikha how are you?</h1>

// function App() {
//     return (
//         <div>
//             <h1 id="title">hello shikha how are you?</h1>
//             <p>Welcome to React!</p>
//         </div>
//     );
// }

// const a = <App />;

// const element = <h1>Hello Coder {10+20}</h1>



function Header() {

    return (
        <h1>Welcome, to React</h1>
    );
}

function Main() {
    return (
        <h2>This is the information about main content</h2>
    );
}

function Footer() {
    return (
        <h3>Thanks for visiting our website</h3>
    );
}
function App() {

    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);