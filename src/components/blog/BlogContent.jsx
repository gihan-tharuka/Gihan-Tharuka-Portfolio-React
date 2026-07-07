import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const BlogContent = ({ content = [] }) => {
  return (
    <div className="space-y-7">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="pt-4 text-2xl sm:text-3xl font-bold text-white leading-tight"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3
              key={index}
              className="pt-2 text-xl sm:text-2xl font-semibold text-gray-100 leading-tight"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-picto-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "callout") {
          return (
            <aside
              key={index}
              className="rounded-2xl border border-picto-primary/25 bg-picto-primary/10 px-5 py-4 text-gray-200 shadow-lg shadow-picto-primary/5"
            >
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="mt-1 text-picto-primary"
                />
                <p className="leading-relaxed">{block.text}</p>
              </div>
            </aside>
          );
        }

        return (
          <p key={index} className="text-gray-300 leading-8 text-base sm:text-lg">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export default BlogContent;
