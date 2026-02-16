export default function Progress({
  percentage,
  progressColor,
  progressClassName,
  contentProgressClassName,
  description = "Dominio",
  showDescription = true,
}) {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <div
        className={`w-full bg-gray-300 rounded-full h-2 ${contentProgressClassName}`}
      >
        <div
          className={`bg-indigo-500 rounded-full h-2 ${progressClassName}`}
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
      {showDescription ? (
        <span className="text-xs mt-2">
          {percentage}% {description}
        </span>
      ) : null}
    </div>
  );
}
