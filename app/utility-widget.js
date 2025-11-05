"use client";

import { useMemo, useState } from "react";

export default function UtilityWidget() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const isPalindrome = text.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversed = [...isPalindrome].reverse().join("");
    const palindrome = isPalindrome.length > 0 && isPalindrome === reversed;
    return { words, chars, palindrome };
  }, [text]);

  return (
    <div className="utility">
      <div className="row">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
        <button className="btn btn-secondary" onClick={() => { setText(""); setCount(0); }}>Reset</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something?"
        rows={6}
      />
      <div className="stats">
        <div><strong>Words:</strong> {stats.words}</div>
        <div><strong>Chars:</strong> {stats.chars}</div>
        <div><strong>Palindrome:</strong> {stats.palindrome ? "Yes" : "No"}</div>
      </div>
    </div>
  );
}
