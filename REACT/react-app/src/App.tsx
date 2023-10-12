import produce from "immer";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/cart";
import ExpandableText from "./components/ExpandableText";
import MoreComponent from "./components/MoreComponent";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

const App = () => {
  //updating objects
  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 94112 },
  //   });
  // };

  /* updating arrays
  const [tags, setTags] = useState(['happy', 'cheerful']);
  const handleClick = () => {
    //Add
    setTags([...tags, 'exciting']);

    //Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  };
  */

  /* updating array of objects 
  const[bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false}
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true } : bug)
    );
  }
  */

  /* Simplifying update logic with immer
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  

 */
  /*Sharing state between components 
    const [cartItems, setCartItems] = useState(['prod1', 'prod2'])

    const [movies, setMovies] = useState(['film1', 'film2']);
    return(
      <div>
        <NavBar cartItemsCount = {cartItems.length}/>
        <p></p>
        <Cart cartItems = {cartItems} onClear={() => setCartItems([])}/>
      </div>
    )
    */

  /* Exercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Jude" } });
  };

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  ); */

  /*Exercise 2
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']});
  }
  */

  /*Exercise 3 add an item 
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
*/

  /*Form
  return (
    <>
    <div>
      <Form />
    </div>
    </>
  )
  */

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 11, category: "Utilities" },
    { id: 3, description: "ccc", amount: 12, category: "Utilities" },
    { id: 4, description: "ddd", amount: 13, category: "Utilities" },
  ]);

  //filter items
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  if(expenses.length === 0) return null
  return (
    <>
      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
};
export default App;
