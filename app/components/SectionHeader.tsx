
interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlightedText?: string;
    description?: string;
    className?: string;
    light?: boolean;
}

export default function SectionHeader({
    badge,
    title,
    highlightedText,
    description,
    className = "",
    light = false
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-16 ${className}`}>
            {badge && (
                <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                    {badge}
                </span>
            )}
            <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-text-primary'}`}>
                {title}{" "}
                {highlightedText && (
                    <span className="bg-clip-text text-transparent bg-gradient-primary">
                        {highlightedText}
                    </span>
                )}
            </h2>
            {description && (
                <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-text-secondary'}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
