async function load() {
  loading.textContent = "Loading...";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    list.innerHTML = "";

    data.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item.title;

      list.appendChild(li);
    });
  } catch (error) {
    list.innerHTML = "";

    const li = document.createElement("li");

    li.textContent = "Sorry, we couldn't load the dishes.";

    list.appendChild(li);

    console.error(error);
  } finally {
    loading.textContent = "";
  }
}
