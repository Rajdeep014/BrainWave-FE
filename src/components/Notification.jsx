import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ title, className }) => {
  return (
    <div
      className={` ${
        className || ""
      } gap-5 bg-n-8/40 p-4 pr-6 border border-n-1/10  rounded-2xl backdrop-blur `}
    >
      <img
        src={notification1}
        alt="notification image"
        width={62}
        height={62}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((image, index) => (
              <li
                className="flex h-6 w-6  rounded-full border-2 border-n-12  overflow-hidden"
                key={index}
              >
                <img
                  src={image}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={image}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
