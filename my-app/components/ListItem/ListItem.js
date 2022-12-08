export const ListItem = ({
  item,
  index,
  onChangeComplitedStatus,
  onRemoveItem,
}) => {
  return (
    <li key={index} className="key">
      <div className="key-container">
      <input
        className ='list-item'
        type="checkbox"
        checked={item.complited}
        onChange={() => onChangeComplitedStatus(index)}
      />
      <p className={item.complited ? "item-complited" : "item"}>{item.value}</p>
      </div>
       
      <div onClick={() => onRemoveItem(index)} className='remover'> Х</div>
    </li>
  );
};
