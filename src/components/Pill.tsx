type PillProps = {
  text: string;
};

const Pill = ({ text }: PillProps) => (
  <span className="px-4 py-1.5 text-sm font-medium rounded-xl bg-text-base/5 text-text-base border border-text-base/10 hover:bg-text-base/10 transition-colors cursor-default">
    {text}
  </span>
);
export default Pill;
