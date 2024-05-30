interface iconProps {
  name: string;
}

const StaticIcon: React.FC<iconProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="rounded-lg shaking-img"
        alt={`${name}`}
        height="30"
        width="40"
        src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}-original.svg`}
      />
      <p className="text-xxs pt-1">{name.toUpperCase()}</p>
    </div>
  )
}

export { StaticIcon }