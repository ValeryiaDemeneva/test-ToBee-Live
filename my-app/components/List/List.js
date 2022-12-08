import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";

export const List = ({ list, setList }) => {
  console.log(list);
  const [status, setStatus] = useState("all");
  const onChangeComplitedStatus = (index) => {
    setList(
      list.map((item, i) => {
        if (index === i) {
          item.complited = !item.complited;
        }
        return item;
      })
    );
  };

  const onCalculateActiveItems = () => {
    const filteredList = list.filter((item) => !item.complited);
    return filteredList.length;
  };
  const onRemoveItem = (index) => {
    setList([...list.filter((item, i) => i !== index)]);
  };

  const onClearComplited = () => {
    setList([...list.filter((item) => !item.complited)]);
  };

  const onReturnStatusList = () => {
    if (status === "active") {
      return list.filter((item) => !item.complited);
    } else if (status === "complited") {
      return list.filter((item) => item.complited);
    } else {
      return list;
    }
  };

  return (
    <div>
      <ul>
        {onReturnStatusList().map((item, index) => {
          return (
            <ListItem
              item={item}
              index={index}
              onChangeComplitedStatus={onChangeComplitedStatus}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </ul>
      <div>
        <div>{onCalculateActiveItems()} items left </div>
        <div>
          <button onClick={() => setStatus("all")}>All</button>
          <button onClick={() => setStatus("active")}>Active</button>
          <button onClick={() => setStatus("complited")}>Complited</button>
        </div>
        <button onClick={() => onClearComplited()}>Clear complited</button>
      </div>
    </div>
  );
};
