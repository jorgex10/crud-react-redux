import { hideAddUserCard, showAddUserCard } from "../store/ui/slice";
import { useAppDispatch } from "./store";

export const useUiActions = () => {
  const dispatch = useAppDispatch();

  const hideAddUserBlock = () => {
    dispatch(hideAddUserCard());
  };

  const showAddUserBlock = () => {
    dispatch(showAddUserCard());
  };

  return { hideAddUserBlock, showAddUserBlock };
};
