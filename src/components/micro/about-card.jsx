function AboutCard({ title, description, Icon, iconColor, bgIcon }) {
  const IconComponent = Icon;
  return (
    <div className="bg-gray-50 flex text-center flex-col items-center p-6 rounded-lg">
      <div
        className={`w-16 h-16 rounded-full ${bgIcon} flex items-center justify-center mb-4`}
      >
        <IconComponent size={32} color={iconColor} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AboutCard;
