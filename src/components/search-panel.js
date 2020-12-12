const SearchPanel = () => {
  const searchPlaceholder = 'Type hire to search';
  const searchStyle = {
    fontSize: '25px'
  }
  return <input
    style={searchStyle}
    placeholder={searchPlaceholder}/>;
}
export default SearchPanel;