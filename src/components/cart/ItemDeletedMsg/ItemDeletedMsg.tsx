export type ItemsDeletedMessageType = {
  undoDelete: (undo: boolean) => void;
  qty: number;
};

const ItemsDeletedMessage: React.FC<ItemsDeletedMessageType> = ({
  undoDelete,
  qty,
}: ItemsDeletedMessageType) => {
  return (
    <div className="mt-20 mb-4 px-6">
      <div className="flex h-10 items-center justify-center rounded bg-apricot-lite font-jekoBold text-xs leading-none tracking-tight text-primary">
        Items deleted &#128075;
        <button
          className="ml-3 inline-block rounded-full bg-secondary px-2 py-1 text-xxs font-medium leading-snug text-[#B78779]"
          onClick={() => undoDelete(true)}
        >
          Undo ({qty})
        </button>
      </div>
    </div>
  );
};

export default ItemsDeletedMessage;
