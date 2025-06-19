
import { useEffect, useRef, useState } from 'react';

const LanyardBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !badgeRef.current) return;

      const rect = badgeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      setPosition({ x: deltaX * 0.1, y: deltaY * 0.1 });
      setRotation(deltaX * 0.1);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      // Return to original position with spring animation
      setPosition({ x: 0, y: 0 });
      setRotation(0);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div className="lanyard-container">
      {/* Lanyard String */}
      <svg
        width="200"
        height="150"
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 5 }}
      >
        <path
          d={`M 100 0 Q 100 ${50 + position.y * 0.5} 100 ${100 + position.y}`}
          className="lanyard-string"
        />
      </svg>

      {/* Badge */}
      <div
        ref={badgeRef}
        className="lanyard-badge glass-card p-4 rounded-2xl mt-24 mx-auto w-48 interactive"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Profile Photo */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-cyan neon-glow">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            alt="Jhon Joshua Abutan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badge Info */}
        <div className="text-center">
          <h3 className="font-semibold text-white mb-1">Jhon Joshua</h3>
          <p className="text-sm text-neon-cyan">Frontend Developer</p>
          <p className="text-xs text-gray-400 mt-2">ID: JJA2024</p>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full animate-[shine_3s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

export default LanyardBadge;
