const Card = ({ props }) => {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="text-center">
          <div className="h-50 w-60">
            <img
              src={`https://picsum.photos/id/${props.id}/400/300`}
              alt={props.author}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-2xl object-cover hover:scale-105 duration-300"
            />
          </div>

          <h2 className="mt-2">
            {props.author} — {props.id}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
