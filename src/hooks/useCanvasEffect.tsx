import { useEffect, useState } from "react";
import { Effect } from "../classes/Effect";

// Courtesy of Franks Laboratory - https://youtube.com/watch?v=2F2t1RJoGt8

export const useCanvasEffect = (canvasID : string) => {

    const [firstLoad, setFirstLoad] = useState(true);


    useEffect(() => {
        const canvas : HTMLCanvasElement = document.querySelector(`#${canvasID}`)!;
        if (!canvas) return;
    
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        if (!ctx) return;
    
        canvas.width = window.innerWidth > 1600 ? 1600 : document.documentElement.clientWidth;
        canvas.height = window.innerHeight > 900 ? 900 : document.documentElement.clientHeight;
    
        const effect = new Effect(ctx, canvas.width, canvas.height, canvas.id);
    
        if (firstLoad){
            effect.createText(['Zhenkai', 'Developer']);
            effect.convertToParticles();
    
            const inViewPort = (element: HTMLElement) => {
                const rect = element.getBoundingClientRect();
                return rect.bottom >= 0;
            };
    
            const animate = () => {
                if (inViewPort(canvas)) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    effect.render();
                }
    
                requestAnimationFrame(animate);
            };
    
            animate();
    
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth > 1600 ? 1600 : document.documentElement.clientWidth;
                canvas.height = window.innerHeight > 900 ? 900 : document.documentElement.clientHeight;
                effect.resize(canvas.width, canvas.height);
                effect.createText(['Zhenkai', 'Developer']);
                effect.convertToParticles();
            });

        }
    
        setTimeout(() => {
            setFirstLoad(false);
        }, 1);

    }, [firstLoad]);


    return (
        <>
        </>
    );
};