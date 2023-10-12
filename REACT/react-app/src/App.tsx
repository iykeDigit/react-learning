import produce from "immer";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/cart";
import ExpandableText from "./components/ExpandableText";
import MoreComponent from "./components/MoreComponent";

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


  return (
    <>
    <div>
      <MoreComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia fugit nam! Recusandae ut, praesentium optio voluptatum quis velit voluptate ea in non illo nihil, ratione sunt autem doloremque expedita.
        Nulla reprehenderit numquam aspernatur ad aliquam quis dicta? Ut consectetur id fugiat impedit dolorem? Veritatis molestias voluptatibus ex laboriosam reiciendis possimus odio, non labore modi voluptatem commodi excepturi, aliquid totam!
        Facere, velit dolor odio similique quia recusandae officiis, cum totam obcaecati rem voluptate nisi ex error eveniet exercitationem soluta. Porro molestias ullam voluptate odit minus laborum vel, enim adipisci ipsa.
        Itaque, voluptatem dolorem nisi officia dolor quam magnam in reprehenderit eos neque dicta labore voluptas. Ad quisquam rerum, fugit ducimus reiciendis amet, nobis ratione animi suscipit quidem possimus? Ea, eligendi.
        Tempora possimus accusamus, odio reiciendis vitae fugiat fuga neque ratione iure hic at corporis. Et quidem ullam voluptate illum rem sapiente modi nesciunt vero, aspernatur cumque pariatur odio eaque adipisci.
        Molestias quas voluptatem esse beatae deleniti, culpa recusandae, nemo laudantium asperiores ducimus saepe libero blanditiis odio eveniet provident tempore aliquid expedita ea porro? Facere maiores, cumque qui beatae aliquid aut.
        Molestiae illum qui ab ullam ratione repellat voluptatibus. Dolorem voluptatum eos maxime quam provident neque asperiores quae illum eveniet explicabo quo consectetur ratione, dignissimos illo voluptatem labore dolorum eaque ex!
        Optio sequi, excepturi laudantium nulla eaque delectus. Est nemo exercitationem sint temporibus dolore libero adipisci voluptatem? Nisi, cum repudiandae. Odit voluptatum voluptate atque dicta, maxime voluptatem laboriosam provident unde animi?
        Aliquam dolorem provident asperiores? Consequuntur deserunt voluptatem eligendi a labore veniam veritatis, voluptatum dolores eos eius aliquid. Itaque ad cum ex nostrum voluptatibus, earum id temporibus, sapiente quae accusantium sequi?
        Praesentium dicta earum a enim inventore tempora maxime repellendus? Eius, non assumenda odio veniam, dolor esse illum cumque illo asperiores magnam, deserunt corporis nemo beatae possimus consequatur necessitatibus doloremque tempore?
      </MoreComponent>
    </div>
    </>
  )
};
export default App;
