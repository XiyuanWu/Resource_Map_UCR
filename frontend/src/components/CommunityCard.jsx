import { Link } from "react-router-dom";

function CommunityCard({ image, title, description, href = "#" }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#b8c6df] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        to={href}
        className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12326b] focus-visible:ring-offset-2"
      >
        <div className="h-36 w-full overflow-hidden bg-[#dbe6f8]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-2 px-4 py-4 md:px-5">
          <h3 className="font-display text-xl font-bold leading-tight text-[#12326b]">
            {title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-[#3b4f77]">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default CommunityCard;
