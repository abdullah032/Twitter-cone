import "./css/search.css";
function Search() {
  return (
    <form action="" method="post" id="search-box">
      <label htmlFor="">
        <input type="text" placeholder="Search" />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </label>
    </form>
  );
}
export default Search;
