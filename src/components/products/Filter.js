import { LinkToFavorite } from '../../styled-component/StyledLink';

const Filter = ({ productsList }) => {
  let maxPrice = 8000;
  let minPrice = 500;

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data.fields.name.toLowerCase().search(value) !== -1;
    });
    productsList.setFilter(result);
  };

  const filterAll = () => {
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data;
    });
    productsList.setFilter(result);
  };

  const filterIkea = () => {
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data.fields.company === 'ikea';
    });
    productsList.setFilter(result);
  };

  const filterCaressa = () => {
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data.fields.company === 'caressa';
    });
    productsList.setFilter(result);
  };

  const filterMarcos = () => {
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data.fields.company === 'marcos';
    });
    productsList.setFilter(result);
  };

  const filterLiddy = () => {
    let result = [];
    result = productsList.furnituresList.filter((data) => {
      return data.fields.company === 'liddy';
    });
    productsList.setFilter(result);
  };

  const handleRange = (e) => {
    productsList.setPrice(e.target.value);
  };

  return (
    <>
      <div className="products_content_filter">
        <input
          className="products_content_filter_search"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
        <div className="products_content_filter_companies">
          <h3>Companies</h3>
          <ul>
            <li onClick={filterAll}>All</li>
            <li onClick={filterCaressa}>Caressa</li>
            <li onClick={filterMarcos}>Marcos</li>
            <li onClick={filterLiddy}>Liddy</li>
            <li onClick={filterIkea}>Ikea</li>
          </ul>
        </div>
        <div className="products_content_filter_price">
          <h3>Price</h3>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={productsList?.price}
            onChange={(e) => handleRange(e)}
          />
          <h4>
            Show price {'>'} <span>${productsList?.price / 100}</span>
          </h4>
        </div>
        <div className="products_content_filter_favorites">
          <LinkToFavorite to="/favorite">
            <h3>My favorites</h3>
          </LinkToFavorite>
        </div>
      </div>
    </>
  );
};

export default Filter;
