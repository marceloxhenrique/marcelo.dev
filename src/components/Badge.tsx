import { badge } from "./BadgeList";

const Badge = () => {
  return (
    <section className="w-full">
      <h2 className="mb-4 text-xl font-semibold text-[#007ACC] text-left">
        Tech I work with:
      </h2>
      <div className="flex flex-wrap gap-2">
        {badge.map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 transition-all hover:bg-slate-200"
          >
            <span className={`text-lg`} style={{ color: badge.color }}>
              {badge.icon}
            </span>
            <span>{badge.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Badge;
