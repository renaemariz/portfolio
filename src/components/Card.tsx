import React from "react";

type CardProps<T> = {
  index: number;
  title?: string;
  cardBody?: string | React.ReactNode;
  data?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

const Card = <T,>({
  index,
  title,
  data,
  cardBody,
  renderItem,
}: CardProps<T>) => {
  return (
    <div
      key={index}
      className="group rounded-3xl border border-card-border bg-card-bg shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className={`${cardBody ? "flex-grow" : ""}`}>
        <div className="card-header bg-gradient-to-r from-green-400 to-blue-500 bg-linear-to-r from-indigo-400 to-cyan-400 bg-[length:100%_2px] bg-no-repeat bg-bottom p-8 md:p-6">
          <h5 className="text-md font-semibold uppercase text-main">{title}</h5>
        </div>

        {/* can support react nodes */}
        {cardBody && (
          <div className="card-body p-8 md:p-6  text-sm text-secondary leading-relaxed flex-grow">
            {cardBody}
          </div>
        )}
      </div>

      {/* footer */}
      <div className="card-footer p-8 md:p-6 ">
        <div className="flex flex-wrap gap-2">
          {" "}
          {data?.map((item, i) => (
            <React.Fragment key={i}>{renderItem(item, i)}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
