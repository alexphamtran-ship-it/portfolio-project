import { type FC, type ReactNode, useState, useEffect, useRef } from 'react';

const PASSCODE = 'AlexDesignUnlock';
const STORAGE_KEY = 'portfolio_unlocked';

interface PasscodeGateProps {
  children: ReactNode;
}

const PasscodeGate: FC<PasscodeGateProps> = ({ children }) => {
  const [unlocked, setUnlocked] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!unlocked) {
      inputRef.current?.focus();
    }
  }, [unlocked]);

  const handleChange = (value: string) => {
    // Only allow characters that match the passcode prefix
    setInput(value);

    if (value === PASSCODE) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else if (value.length >= PASSCODE.length) {
      // Wrong code — shake and reset
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setInput('');
      }, 600);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-(--color-bg-primary) flex flex-col items-center justify-center px-6 gap-8">
      {/* Badge / logo */}
      <img
        src="/icons/circular-badge.svg"
        alt="AT badge"
        className="w-28 h-28 opacity-80"
      />

      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-heading text-xl text-(--color-text-secondary) tracking-widest uppercase">
          Enter passcode
        </p>

        {/* Input wrapper — shows bullet chars, pulses purple on focus */}
        <input
          ref={inputRef}
          type="password"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          maxLength={PASSCODE.length}
          autoComplete="off"
          spellCheck={false}
          placeholder="••••••••••••••••"
          className={[
            'bg-transparent border-b-2 border-(--color-text-secondary) focus:border-(--color-brand-purple)',
            'text-(--color-text-primary) font-heading text-3xl text-center tracking-[0.3em]',
            'outline-none w-56 pb-2 transition-colors duration-200 placeholder:text-(--color-text-secondary)/40',
            shake ? 'animate-wiggle border-red-500' : '',
          ].join(' ')}
        />

        {/* Progress dots */}
        <div className="flex gap-2 mt-1">
          {Array.from({ length: PASSCODE.length }).map((_, i) => (
            <div
              key={i}
              className={[
                'w-1.5 h-1.5 rounded-full transition-colors duration-150',
                i < input.length ? 'bg-(--color-brand-purple)' : 'bg-(--color-text-secondary)/30',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasscodeGate;
