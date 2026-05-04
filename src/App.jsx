import Card from "./Card";
function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
