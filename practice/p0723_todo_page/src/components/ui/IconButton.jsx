const IconButton = ({ textColor, icon, modifyHandler }) => {
  return (
    <button className={`w-8 text-xl font-semibold cursor-pointer ${textColor}`} onClick={modifyHandler}>
      {icon}
    </button>
  );
};

export default IconButton;
