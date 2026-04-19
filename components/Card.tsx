import React from "react";

type CardProps<T> = {
  index: number;
  title?: string;
  description?: string | React.ReactNode;
  data?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

const Card = <T,>({
  index,
  title,
  data,
  description,
  renderItem,
}: CardProps<T>) => {
  return (
    <div
      key={index}
      className="group p-8 md:p-6 rounded-3xl border border-card-border bg-card-bg  shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-grad-from/30 flex flex-col h-full"
    >
      <div className={`mb-6 ${description ? "flex-grow" : ""}`}>
        <p className="text-md font-semibold uppercase mb-2 text-main group-hover:text-grad-from transition-colors">
          {title}
        </p>
        {description && (
          <div className="text-sm text-secondary leading-relaxed flex-grow">
            {description}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {" "}
        {data?.map((item, i) => (
          <React.Fragment key={i}>{renderItem(item, i)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Card;
