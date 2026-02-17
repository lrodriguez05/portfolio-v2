function ProjectCard({
  title,
  description,
  tech,
  social,
  rowPosition,
  colPosition,
  Icon,
  bgHeight,
  bgColor,
  bgFrom,
  bgTo,
  gradientDir,
  IconSize,
  colCondition,
}) {
  const IconComponent = Icon;
  return (
    <div
      className={`bg-white ${colPosition} ${rowPosition} ${colCondition} rounded-b-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
    >
      <div
        className={`rounded-t-lg ${bgHeight} ${bgColor} bg-gradient-to-${gradientDir} ${bgFrom} ${bgTo} `}
      >
        <div className="flex items-center justify-center h-full">
          <IconComponent size={`${IconSize}`} color="white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {tech.map((techItem, index) => (
              <span
                key={index}
                className="bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm"
              >
                {techItem}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {social.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 p-2"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProjectCard;
