import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";

export const List = ({ list, setList }) => {
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
    <div className="list-container">
      <ul className="ul-list">
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
      {list.length ? (
        <div className="bottom-buttons">
          <div>{onCalculateActiveItems()} items left </div>
          <div className="all-active-complited">
            <button
              onClick={() => setStatus("all")}
              className={status === "all" && "selected"}
            >
              All
            </button>
            <button
              onClick={() => setStatus("active")}
              className={status === "active" && "selected"}
            >
              Active
            </button>
            <button
              onClick={() => setStatus("complited")}
              className={status === "complited" && "selected"}
            >
              Complited
            </button>
          </div>
          <button
            className="clear-complite-button"
            onClick={() => onClearComplited()}
          >
            Clear complited
          </button>
        </div>
      ) : null}
    </div>
  );
};
