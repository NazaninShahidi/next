import Image from "next/image";

interface IProduct {
  id: string;
  title: string;
  image: string;
  star: number;
  price: string;
  isBestSelling: boolean;
}

function Card({ product }: { product: IProduct }) {
  return (
    <div className="flex flex-col bg-white font-Montserrat shadow-lg ">
      <div>
        <Image src={product.image} alt="lamp" width={300} height={100} />
        <div className="flex flex-col space-y-3 p-4 shadow-lg ">
          <div className="flex justify-center items-center flex-col space-y-2">
            <h6 className="font-[500] text-[18px]">{product.title}</h6>
            <div className="flex space-x-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#F9940A"
                />
              </svg>
            </div>
            <span className="font-[500] text-[18px]">{`৳${product.price}`}</span>
          </div>
          <div className="flex flex-row justify-center items-center p-3 gap-3 bg-[#F9940A] rounded-md">
            <button className="font-[500] text-[18px]">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
