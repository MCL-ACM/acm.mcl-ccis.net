import React from "react";
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"

export default function Footer() { // TODO: Can someone try to set the height of the parent div to wrap its children (.incld background image). Parent height is currently set hard-valued
	let year = new Date().getFullYear()

	let socialLinks = [
		{
			
			link: "https://twitter.com/MCL_ACM",
			icon: <FaTwitter size={35} />
		},
		{
			
			link: "https://fb.me/acmMCL",
			icon: <FaFacebook size={35} />
		},
		{
			
			link: "https://www.instagram.com/acm_mcl/",
			icon: <FaInstagram size={35} />
		},
	]

	return (
		<footer className="absolute bottom-0 w-full h-[34.8125em] z-[-100] ">
			<svg className="absolute" viewBox="0 0 375 48" preserveAspectRatio="none">
				<path d="M0 0H375V47.7998C375 47.7998 317 0.510638 296 0.510638C275 0.510638 0 48 0 48V0Z" fill="#FFFFFF"/>
			</svg>
			<main className="h-full bg-gradient-to-tr from-standard-blue to-cerulean-crayola px-5 pt-24 pb-10"> 
				<section className="h-full w-full flex flex-col justify-between text-white">
					<div className="flex flex-col gap-y-[2.375rem]">
						<article className="flex flex-col gap-y-[1.0625rem]">
							<header className="text-sm font-light">Connect with us</header>
							<p className="text-lg">Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines</p>
							<p className="text-lg">acm.mclstudchapter@gmail.com</p>
						</article>
						<article className="flex flex-col gap-y-[1.0625rem]">
							<header className="text-sm font-light">Keep in touch</header>
							<figure className="flex gap-x-3.5">
								{
									socialLinks.map(({link, icon}) => <a href={link}>{icon}</a>)
								}
							</figure>
						</article>
					</div>
					<p className="text-lg font-light text-center">© {year} Malayan Colleges Laguna ACM Student Chapter</p>
				</section>
			</main>
		</footer>

	);
}
