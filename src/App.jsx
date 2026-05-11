import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 350 },
    { id: 2, name: "banana", calories: 98 },
    { id: 3, name: "raspberry", calories: 400 },
    { id: 4, name: "mulberry", calories: 52 },
  ];
  const vegetables = [
    { id: 1, name: "tomato", calories: 350 },
    { id: 2, name: "ginger", calories: 58 },
    { id: 3, name: "onion", calories: 400 },
    { id: 4, name: "gourd", calories: 52 },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-600 p-10  flex gap-10 justify-center">
      {fruits.length> 0 && <List items={fruits} categories="Fruits" /> } 
        <List items={vegetables} categories="vegetables" />
      </div>
    </>
  );
}
export default App;
