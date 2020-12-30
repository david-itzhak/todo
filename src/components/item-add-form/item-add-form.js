import './item-add-form.css'

const ItemAddForm = ({addItem}) => {
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => addItem ("Hello, world!")}
      >Add Item</button>
    </div>

  )
}
export default ItemAddForm;
