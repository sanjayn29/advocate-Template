import { useEffect, useState } from "react";
import { Scale } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 300);
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-700 ${
        exiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Card container */}
      <div
        className={`relative transition-all duration-700 ${
          exiting ? "scale-[3] opacity-0" : ""
        }`}
      >
        <div className="animate-card-rotate" style={{ transformStyle: "preserve-3d" }}>
          <div className="w-72 h-44 rounded-lg gold-border-glow bg-card flex flex-col items-center justify-center gap-3 p-6">
            <Scale className="w-10 h-10 text-gold animate-scale-pulse" />
            <h2 className="font-display text-lg text-gold tracking-widest uppercase">
              Sathiyanesan M
            </h2>
            <p className="font-accent text-sm text-muted-foreground tracking-wider">
              Legal Business Consultant
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-72 h-0.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-gold rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground font-body tracking-widest">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
