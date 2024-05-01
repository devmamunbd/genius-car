/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const ServiceCard = ({service}) => {


    const {title, img, price} = service

  return (
    <div>
      <div className="w-[360px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {title} 
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
           Price: ${price}
          </h2>
        </div>
        {/* <p className="dark:text-gray-800">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p> */}
      </div>
    </div>
  );
};

export default ServiceCard;
