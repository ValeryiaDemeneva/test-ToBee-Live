export const ListItem = ({
  item,
  index,
  onChangeComplitedStatus,
  onRemoveItem,
}) => {
  return (
    <li key={index} className={"key"}>
      <input
        type="checkbox"
        checked={item.complited}
        onChange={() => onChangeComplitedStatus(index)}
      />
      <p className={item.complited ? "item-complited" : "item"}>{item.value}</p>
      <div onClick={() => onRemoveItem(index)}> Х</div>
    </li>
  );
};
