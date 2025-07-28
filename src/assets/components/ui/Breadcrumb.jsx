import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumb = ({ items = [] }) => (
  <ol className="mt-3 flex items-center whitespace-nowrap justify-center ">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="inline-flex items-center"
      >
        {item.to ? (
          <Link
            className="font-Primary-Poppins flex items-center text-sm text-secondary-dark
             hover:text-primary-light hover:underline hover:font-semibold
             cursor-default"
            to={item.to}
          >
            {item.label}
          </Link>
        ) : (
          <span
            className="font-Tertiary-Inter inline-flex items-center text-sm text-secondary-dark cursor-default truncate"
            aria-current="page"
          >
            {item.label}
          </span>
        )}
        {idx < items.length - 1 && (
          <ChevronRight
            size="20"
            className="text-secondary-dark font-Tertiary-Inter"
          />
        )}
      </li>
    ))}
  </ol>
);

export default Breadcrumb;
