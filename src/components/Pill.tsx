type PillProps = {
  text: string;
};

const Pill = ({ text }: PillProps) => (
  <div className="px-4 py-1.5 text-sm font-medium rounded-xl text-main text-center border border-text-base/10 cursor-default">
    {text}
  </div>
);
export default Pill;
