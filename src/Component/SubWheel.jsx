import WheelComponent from "react-wheel-of-prizes";

export const SubWheel = ({ data, onFinished, segColors }) => {
  console.log(data);
  return (
    <>
      {data.length === 0}
      <WheelComponent
        segments={data}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={250}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
    </>
  );
};
