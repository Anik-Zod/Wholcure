"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        // Initialize positions
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "none" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "none" });

        // The trailing circle has a longer duration for smoothness (slow follow)
        const xFollowerTo = gsap.quickTo(follower, "x", { duration: 0.8, ease: "power3" });
        const yFollowerTo = gsap.quickTo(follower, "y", { duration: 0.8, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xFollowerTo(e.clientX);
            yFollowerTo(e.clientY);
        };

        const onMouseDown = () => {
            gsap.to([cursor, follower], { scale: 0.8, duration: 0.3 });
        };

        const onMouseUp = () => {
            gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
        };

        const onHoverEnter = () => {
            gsap.to(follower, {
                scale: 1.5,
                backgroundColor: "rgba(240, 82, 37, 0.15)",
                borderColor: "rgba(240, 82, 37, 0.8)",
                duration: 0.4
            });
            gsap.to(cursor, {
                scale: 0.5,
                backgroundColor: "#fff",
                duration: 0.4
            });
        };

        const onHoverLeave = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(240, 82, 37, 0.4)",
                duration: 0.4
            });
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "#f05225",
                duration: 0.4
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Dynamic hover detection for links/buttons
        const attachHoverEvents = () => {
            const targets = document.querySelectorAll('a, button, .cursor-pointer, input, textarea');
            targets.forEach(el => {
                el.addEventListener('mouseenter', onHoverEnter);
                el.addEventListener('mouseleave', onHoverLeave);
            });
        };

        attachHoverEvents();

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(attachHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block">
            {/* Trailing Outer Circle */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 size-10 rounded-full border-[1.5px] border-primary/40 bg-transparent flex items-center justify-center"
                style={{ willChange: 'transform' }}
            ></div>
            {/* Inner Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 size-3 rounded-full bg-primary"
                style={{ scale: 1, transformOrigin: 'center center' }}
            ></div>

        </div>
    );
}
