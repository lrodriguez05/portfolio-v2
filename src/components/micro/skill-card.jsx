import Progress from "./progress";

function SkillCard(props) {
  const {
    name,
    bgColor,
    rowPosition,
    colPosition,
    description,
    iconPosition = "top",
    color,
    borderColor,
    border,
    progressColor,
    percentage,
  } = props;

  return (
    <div
      className={`flex flex-col items-center text-center p-6 rounded-lg ${color} ${bgColor} ${rowPosition} ${colPosition} ${borderColor} ${border}`}
    >
      {props.icon && iconPosition === "top" ? (
        <props.icon className="w-12 h-12 mb-4" />
      ) : null}

      <div className={`text-lg font-bold mb-2`}>{name}</div>

      {props.icon && iconPosition === "bottom" ? (
        <props.icon className="w-12 h-12 mb-4" />
      ) : null}

      {description ? <p className="text-sm mb-3">{description}</p> : null}
      <Progress
        percentage={percentage}
        progressClassName={`${progressColor}`}
      />
    </div>
  );
}

export default SkillCard;
