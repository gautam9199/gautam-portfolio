// src/BackgroundParticles.js
import React, { useRef, useEffect } from "react";

function BackgroundParticles({ mode }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let particles = [];
        const config = {
            count: 40,
            maxVelocity: 0.15,
            linkDistance: 130
        };



        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setSize();
        window.addEventListener("resize", setSize);

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < config.count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * config.maxVelocity * 2,
                    vy: (Math.random() - 0.5) * config.maxVelocity * 2
                });
            }
        };

        createParticles();

        const isDark = mode === "dark";
        const colorPoint = isDark
            ? "rgba(77,163,255,0.4)"
            : "rgba(80,120,200,0.35)";
        const colorLink = isDark
            ? "rgba(77,163,255,0.25)"   // was 0.15
            : "rgba(80,120,200,0.22)";  // was 0.12



        const draw = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            // update positions
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // bounce on edges
                if (p.x <= 0 || p.x >= width) p.vx *= -1;
                if (p.y <= 0 || p.y >= height) p.vy *= -1;
            });

            // draw connections
            ctx.beginPath();
            particles.forEach((p, i) => {
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < config.linkDistance) {
                        const alpha = (1 - dist / config.linkDistance) * 0.8; // was 0.4
                        ctx.strokeStyle = colorLink;
                        ctx.lineWidth = 0.7;                                   // new: slightly thicker
                        ctx.globalAlpha = alpha;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                    }


                }
            });
            ctx.stroke();
            ctx.globalAlpha = 1;

            // draw points
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.fillStyle = colorPoint;
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); // smaller dots
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", setSize);
        };
    }, [mode]); // re-run when theme changes

    return <canvas id="bg-particles" ref={canvasRef} />;
}

export default BackgroundParticles;
