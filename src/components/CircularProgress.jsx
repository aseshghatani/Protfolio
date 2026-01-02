import { motion } from "framer-motion";

const colorMap = {
  blue: "var(--stat-blue)",
  green: "var(--stat-green)",
  orange: "var(--stat-orange)",
};


const CircularProgress = ({ value, label, color, delay = 0 }) => {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2"
    >
      <div className="circular-progress">
        <svg viewBox="0 0 80 80">
          <defs>
            <linearGradient
              id={`gradient-${color}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={`hsl(${colorMap[color]})`} />
              <stop offset="100%" stopColor={`hsl(${colorMap[color]} / 0.5)`} />
            </linearGradient>
          </defs>
          <circle className="track" cx="40" cy="40" r={radius} />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            stroke={`url(#gradient-${color})`}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{value}</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
};

export default CircularProgress;
