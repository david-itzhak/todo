import './search-panel.css';

const SearchPanel = () => {
  const searchPlaceholder = 'Type hire to search';

  return <input
    type="text"
    className="form-control search-input"
    placeholder={searchPlaceholder}/>;
}
export default SearchPanel;