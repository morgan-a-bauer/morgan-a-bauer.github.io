interface CategoryTagProps {
  children: string;
}

export function CategoryTag({ children }: CategoryTagProps) {
  return (
    <span className="text-ivy font-mono text-xs font-medium tracking-wide uppercase">
      [{children}]
    </span>
  );
}
