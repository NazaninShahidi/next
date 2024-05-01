function Collection() {
  return (
    <div className="my-4 flex flex-col w-full">
      <h5 className="text-center font-medium leading-8 text-2xl font-Montserrat p-2 my-3">
        Collection
      </h5>
      <div className="flex items-center justify-between flex-row-reverse">
        <div className="flex flex-col items-center space-y-3">
          <img src="/image/lamp.png" alt="lamp" />
          <h5 className="font-medium text-2xl font-Montserrat">Lamp</h5>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <img src="/image/sofa.png" alt="lamp" />
          <h5 className=" text-2xl font-Montserrat font-medium">Sofa</h5>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <img src="/image/book.png" alt="lamp" />
          <h5 className="font-medium text-2xl font-Montserrat">BookSelf</h5>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <img src="/image/table.png" alt="lamp" />
          <h5 className="font-medium text-2xl font-Montserrat">Table</h5>
        </div>{" "}
        <div className="flex flex-col items-center space-y-3">
          <img src="/image/chair.png" alt="lamp" />
          <h5 className="font-medium text-2xl font-Montserrat">Chair</h5>
        </div>
      </div>
    </div>
  );
}

export default Collection;
