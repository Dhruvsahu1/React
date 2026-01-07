
// React.createElement(type,props,content)
// Create React element
const heading = React.createElement(
    "h1",
    null,
    "Hello From h1"
);

// Internally react will convert this line into of this types
// {
//   type: "h1",
//   props: { children: "Hello From h1" }
// }

// Create root (ReactDOM, not React)
const root = ReactDOM.createRoot(
    document.querySelector(".container")
);

// Render
root.render(heading);
// React:

//       Converts Virtual DOM → Real DOM

//       Inserts it inside .container

// At this point HTML becomes:
        //  <div class="container">
        //      <h1>Hello From h1</h1>
        //  </div>

// rendering multiple Elements
const heading1 = React.createElement(
    "h2",
    { className: "heading-2" },
    "this is h2's heading"
);
const heading2 = React.createElement(
    "h3",
    { className: "heading-3" },
    "this is h3rd heading"
);
const containedDiv = React.createElement(
    "div",
    { className: "contained" },
    [heading1, heading, heading2]
);
// this array becomes
{/* <div class="contained">
  <h2>...</h2>
  <h1>...</h1>
  <h3>...</h3>
</div> */}
root.render(containedDiv);

// If we render or try to render two root.render
// 🔥 What ACTUALLY happens

// Second render REPLACES the first

// React does NOT append

// React treats render as state update

// 👉 Final DOM:
{/* <div class="container">
  <div class="contained">...</div>
</div> */}

// Do We Need to Create Root Every Time?
// No

// 5️⃣ Real-World Analogy 🧠
// Root = TV Screen
// render() = New Frame

// Every render():

// Clears screen

// Draws new frame

// Not:

// Add on top of old frame





// ✅ One root per container
// ✅ One render() for UI
// ❌ Never use multiple renders to “add” UI
// ❌ Never recreate root repeatedly