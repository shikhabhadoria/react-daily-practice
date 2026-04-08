// const element1 = document.createElement('h1');
// element1.textContent = 'Hello, World!';
// element1.className = 'element';
// element1.id = 'first';
// element1.style.color = 'blue';
// element1.style.fontSize = '30px';
// element1.style.backgroundColor = 'lightgray';

// const element2 = document.createElement('h2');
// element2.textContent = 'Hello, World!';
// element2.className = 'element';
// element2.id = 'first';
// element2.style.color = 'green';
// element2.style.fontSize = '30px';
// element2.style.backgroundColor = 'orange';

// const React = {
//         createElement: function(tag , attributes , Children) {
//             const element = document.createElement(tag);
//             element.textContent = Children;

//             for(const key in attributes) {
//                 element[key] = attributes[key];

//                 if(key === 'style') {
//                     for(const styleKey in attributes.style) {
//                         element.style[styleKey] = attributes.style[styleKey];
//                     }
//                 }
//             }
//             return element;
//        }
// }

const ReactDOM = {
    render: function(child, parent) {
        parent.appendChild(child);
    }
}

const element1 = React.createElement('h1' , {className:'element' , id:'first' , style:{fontSize:"30px" , backgroundColor:"orange"}} , "Hello, World!");
const element2 = React.createElement('h2' , {className:'element' , id:'first' , style:{fontSize:"30px" , backgroundColor:"lightgray"}} , "Hello, Shikha!");

const root = document.getElementById('root');
// ReactDOM.render(element1 , root);
ReactDOM.render(element2 , root);