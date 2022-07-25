function navbar() {
  return `
  <div id="navbar">
      <a href="index.html" id="logo">The Meal</a>
      <div id="navbar-right">
      <input id="input-box" type="text" placeholder="Search for meal" />
        <button id="search" type="submit" class="btn">Search</button>
        <a class="active" href="byname.html">Latest Cuisine</a>
        <a href="day.html">Meal of the day</a>
        <a href="random.html">Random</a>
      </div>
    </div>`;
}
export default navbar;
