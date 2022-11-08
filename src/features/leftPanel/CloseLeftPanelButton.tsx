import { XMarkIcon } from "@heroicons/react/20/solid";
import { removeActiveArea } from "../../app/services/activeAreaSlice";
import { useAppDispatch } from "../../app/store";

const CloseLeftPanelButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      aria-label="close button"
      onClick={() => {
        dispatch(removeActiveArea());
      }}
      className="bg-[#153757] rounded-full"
    >
      <XMarkIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />
    </button>
  );
};

export default CloseLeftPanelButton;