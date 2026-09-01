function CategoryBar({ selected, onSelect }) {
  const categories = ["All", "Main", "Vegan", "Grill"];

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selected ? "chip active" : "chip"}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
