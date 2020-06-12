import React, { useRef, useEffect, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine } from 'gsap';

export interface Props {}

const Pricing= () => {
	const [ tween, setTween ] = useState<GSAPTween>();
	const trigger = useRef<HTMLDivElement>(null);
	const simplyGreen = useRef<HTMLDivElement>(null);
	const shockinglyGreen = useRef<HTMLDivElement>(null);
	const businessGreen = useRef<HTMLDivElement>(null);
	const intersection = useIntersection(trigger, { //스크롤 반응
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});

	useEffect(
		() => {
			if (intersection && intersection.isIntersecting) {
				setTween(
					gsap.to([ simplyGreen.current, shockinglyGreen.current, businessGreen.current ], 0.3, {
						opacity: 1,
						y: 0,
						ease: Sine.easeIn,
						stagger: 0.2,
					}),
				);
			} else if (tween && tween.paused) {
				tween.reverse();
			}
		},
		[ intersection ],
	);

	return (
		<div data-testid="Pricing" className={`Pricing`} ref={trigger}>
			<div className="Pricing__plan" ref={simplyGreen}>
				<div className="Pricing__subtitle">Apple</div>
				<img src="apple.png" alt="Cover image for simply green plan" className="Pricing__image" />
				<p className="Pricing__description">
					this is Apple logo
				</p>
			</div>
			<div className="Pricing__plan" ref={shockinglyGreen}>
				<div className="Pricing__subtitle">Windows</div>
				<img
					src="windows.png"
					alt="Cover image for shockingly green plan"
					className="Pricing__image"
				/>
				<p className="Pricing__description">
					this is Windows logo
				</p>
			</div>
			<div className="Pricing__plan" ref={businessGreen}>
				<div className="Pricing__subtitle">Youtube</div>
				<img
					src="youtube.png"
					alt="Cover image for business green plan"
					className="Pricing__image"
				/>
				<p className="Pricing__description">
					this is Youtube logo
				</p>
			</div>
		</div>
	);
};

export default Pricing;
