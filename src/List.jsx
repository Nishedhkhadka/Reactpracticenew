function List({ items, categories }) {
  const itemlist = items;
  itemlist.sort((a, b) => a.calories - b.calories);
  const loCal = itemlist;

  const listItem = loCal.map((fruit) => (
    <li
      key={fruit.id}
      className="justify-between bg-white p-2 mb-2 rounded shadow-sm"
    >
      <span className="font-medium text-gray-800">{fruit.name}</span>

      <span className="text-green-500 font-semibold"> {fruit.calories}</span>
    </li>
  ));

  return (
    <>
      <div className="bg-white w-64 p-5 rounded-xl shadow-lg " >
        <h4 className="text-xl font-bold text-center mb-5 text-gray-800">{categories }</h4>

        <ol>{listItem}</ol>
      </div>
    </>
  );
}

export default List;
