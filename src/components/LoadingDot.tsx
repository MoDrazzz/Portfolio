import classNames from "classnames";

interface Props {
  delay: 100 | 200 | 300;
}

export default function LoadingDot({ delay }: Props) {
  return (
    <div
      className={classNames(
        "h-[10px] w-[10px] rounded-full bg-light-gray delay-100 dark:bg-dark-gray",
        {
          "animate-[bounce_1s_infinite_100ms]": delay === 100,
          "animate-[bounce_1s_infinite_200ms]": delay === 200,
          "animate-[bounce_1s_infinite_300ms]": delay === 300,
        }
      )}
    ></div>
  );
}
